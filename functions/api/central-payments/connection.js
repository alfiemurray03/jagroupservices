import { centralPaymentsConnection } from '../../_shared/central-payments.js';

export async function onRequestGet({ env }) {
  try {
    return Response.json({
      success: true,
      centralPayments: centralPaymentsConnection(env),
    }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    return Response.json({ success: false, error: error instanceof Error ? error.message : 'Central Payments connection is unavailable.' }, {
      status: 503,
      headers: { 'Cache-Control': 'no-store' },
    });
  }
}
