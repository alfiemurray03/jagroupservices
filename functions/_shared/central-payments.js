const DEFAULT_HEAD_OFFICE_URL = 'https://customerops.jagroupservices.co.uk';
const BRAND = 'JA_GROUP_SERVICES';

function clean(value, max = 1000) {
  return String(value ?? '').trim().slice(0, max);
}

function headOfficeOrigin(env) {
  const configured = clean(
    env.HEAD_OFFICE_CUSTOMEROPS_URL || env.CUSTOMEROPS_BASE_URL || DEFAULT_HEAD_OFFICE_URL,
    500,
  ).replace(/\/$/, '');
  const url = new URL(configured);
  if (url.protocol !== 'https:' && !['localhost', '127.0.0.1'].includes(url.hostname)) {
    throw Object.assign(new Error('The Head Office Central Payments URL must use HTTPS.'), { code: 'CENTRAL_PAYMENTS_URL_INVALID' });
  }
  return url.origin;
}

function platformKey(env) {
  return clean(env.CUSTOMEROPS_API_KEY || env.HEAD_OFFICE_PLATFORM_KEY, 500);
}

export function centralPaymentsConfigured(env) {
  return platformKey(env).length > 20;
}

export async function requestCentralPayments(env, path, init = {}) {
  const key = platformKey(env);
  if (!key) throw Object.assign(new Error('The existing Head Office platform connection is not configured.'), { code: 'CENTRAL_PAYMENTS_NOT_CONFIGURED', status: 503 });
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);
  try {
    const response = await fetch(`${headOfficeOrigin(env)}${path}`, {
      ...init,
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${key}`,
        Accept: 'application/json',
        ...(init.body ? { 'Content-Type': 'application/json' } : {}),
        ...(init.headers || {}),
      },
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      const issue = new Error(payload?.error?.message || payload?.message || `Central Payments returned HTTP ${response.status}.`);
      issue.code = payload?.error?.code || payload?.code || 'CENTRAL_PAYMENTS_REQUEST_FAILED';
      issue.status = response.status;
      throw issue;
    }
    return payload;
  } catch (error) {
    if (error?.name === 'AbortError') throw Object.assign(new Error('Head Office Central Payments did not respond in time.'), { code: 'CENTRAL_PAYMENTS_TIMEOUT', status: 504 });
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

export async function centralPaymentStatus(env, { customerNumber, reference, orderReference } = {}) {
  const query = new URLSearchParams();
  if (customerNumber) query.set('customerNumber', clean(customerNumber, 20));
  if (reference) query.set('reference', clean(reference, 120));
  if (orderReference) query.set('orderReference', clean(orderReference, 120));
  if (![...query.keys()].length) throw Object.assign(new Error('A Central Payments reference is required.'), { code: 'PAYMENT_REFERENCE_REQUIRED', status: 400 });
  return requestCentralPayments(env, `/api/v1/payments/status?${query}`);
}

export async function createCentralBillingPortal(env, customerNumber, returnUrl = 'https://jagroupservices.co.uk/id/dashboard') {
  const ucn = clean(customerNumber, 20).replace(/\s/g, '');
  if (!/^\d{10}$/.test(ucn)) throw Object.assign(new Error('A valid JA Group Services UCN is required.'), { code: 'UCN_REQUIRED', status: 400 });
  return requestCentralPayments(env, '/api/v1/payments/portal', {
    method: 'POST',
    body: JSON.stringify({ brand: BRAND, customerNumber: ucn, returnUrl }),
  });
}

/** Head Office-only approved company charges. No arbitrary browser amount is accepted. */
export async function createApprovedCorporateCheckout(env, input) {
  const customerNumber = clean(input?.customerNumber, 20).replace(/\s/g, '');
  const productCode = clean(input?.productCode, 100).toUpperCase();
  const priceCode = clean(input?.priceCode, 100).toUpperCase();
  if (!/^\d{10}$/.test(customerNumber)) throw Object.assign(new Error('A valid JA Group Services UCN is required.'), { code: 'UCN_REQUIRED', status: 400 });
  if (!productCode || !priceCode) throw Object.assign(new Error('Head Office product and price codes are required.'), { code: 'APPROVED_PRICE_REQUIRED', status: 400 });
  return requestCentralPayments(env, '/api/v1/payments/checkout', {
    method: 'POST',
    body: JSON.stringify({
      brand: BRAND,
      customerNumber,
      productCode,
      priceCode,
      orderReference: clean(input?.orderReference, 120) || undefined,
      serviceReference: clean(input?.serviceReference, 120) || undefined,
      successUrl: clean(input?.successUrl, 500),
      cancelUrl: clean(input?.cancelUrl, 500),
    }),
  });
}

export function centralPaymentsConnection(env) {
  return {
    configured: centralPaymentsConfigured(env),
    authority: 'JA Group Services Ltd – Central Payments',
    headOfficeOrigin: headOfficeOrigin(env),
    stripeSecretHeldLocally: false,
  };
}
