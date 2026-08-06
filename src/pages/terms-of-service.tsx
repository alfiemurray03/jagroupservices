import { Link } from 'react-router-dom';

import { PolicyLayout, PolicyNotice, PolicySection } from '@/components/legal/PolicyLayout';
import { BRAND_SITES } from '@/lib/brand-sites';

const effectiveDate = '6 August 2026';

export default function TermsOfServicePage() {
  return (
    <PolicyLayout
      title="Terms of Service"
      description="The terms governing access to JA Group Services Ltd websites, accounts, platforms, subscriptions, reseller services and Managed Website Services."
      canonicalPath="/terms-of-service"
      effectiveDate={effectiveDate}
    >
      <PolicySection number="1" title="About these Terms">
        <p>
          These Terms of Service (the <strong>Terms</strong>) govern access to and use of websites, customer accounts, platforms, services and digital environments operated by or on behalf of JA Group Services Ltd.
        </p>
        <p>
          JA Group Services Ltd is the legal operating company and contracting party unless a checkout page, order confirmation or service-specific notice expressly identifies a third-party provider as the contracting party for a particular product or service.
        </p>
        <p>
          Sousa Murray is the Company’s master brand. Sousa Murray Domains, Sousa Murray Sites, Sousa Murray Planeia, Sousa Murray Profiles and Sousa Murray eLearning are trading and service brands of JA Group Services Ltd; they are not separate legal entities.
        </p>
        <PolicyNotice title="Five services, four website destinations">
          <p>
            Sousa Murray Sites is the Managed Website Services area within <a href={BRAND_SITES.sites.url}>Sousa Murray Domains</a>. It does not operate through a separate public subdomain.
          </p>
        </PolicyNotice>
      </PolicySection>

      <PolicySection number="2" title="Scope and order of documents">
        <p>These Terms apply to:</p>
        <ul>
          <li>jagroupservices.co.uk and Company-operated subdomains;</li>
          <li>the Sousa Murray websites and service areas;</li>
          <li>JA Group Services ID and other account, administration or customer portals;</li>
          <li>orders, subscriptions, service agreements and digital services supplied directly by the Company; and</li>
          <li>Company support, billing and customer-operation services.</li>
        </ul>
        <p>
          A service may also have supplementary terms, an order form, statement of work, checkout description or third-party provider terms. Those documents form part of the contract where they are presented before purchase or otherwise agreed. If there is a conflict, the more specific document takes priority for that specific service, but nothing excludes rights that cannot lawfully be excluded.
        </p>
      </PolicySection>

      <PolicySection number="3" title="Eligibility and authority">
        <p>
          You must be legally capable of entering into a contract. Unless a service expressly permits otherwise, consumer purchases and customer accounts are intended for persons aged 18 or over.
        </p>
        <p>
          If you act for a company, charity, public body or other organisation, you confirm that you have authority to bind it. You must provide accurate information and promptly update details that change.
        </p>
      </PolicySection>

      <PolicySection number="4" title="Our services and third-party providers">
        <p>The Company provides a mixture of direct services, digital platforms, administrative services and authorised reseller or affiliate services.</p>
        <ul>
          <li><strong>Sousa Murray Domains</strong> provides supported access to domain, hosting and related authorised reseller services.</li>
          <li><strong>Sousa Murray Sites</strong> covers websites designed, built, configured, maintained or managed directly by JA Group Services Ltd.</li>
          <li><strong>Sousa Murray Planeia</strong> provides planning and collaboration tools; it is not a travel agency, carrier, accommodation provider or package-holiday organiser.</li>
          <li><strong>Sousa Murray Profiles</strong> provides digital profile and contact-sharing tools.</li>
          <li><strong>Sousa Murray eLearning</strong> provides authorised reseller and learner-administration services; course content, assessment and certification may be controlled by the relevant training provider.</li>
        </ul>
        <p>
          Where a third party supplies the underlying product or service, its identity and applicable terms will be shown or made available. The Company may provide first-line support and coordinate escalation, but it cannot control a provider’s systems, stock, course content, registry decisions, availability or fulfilment.
        </p>
      </PolicySection>

      <PolicySection number="5" title="Orders and contract formation">
        <p>
          Website content, quotations and price displays are invitations to place an order unless expressly stated otherwise. A contract is formed when the Company accepts the order, sends an order confirmation, activates the service, or both parties sign or otherwise agree a service document.
        </p>
        <p>
          We may decline or cancel an order before acceptance where information is incomplete, pricing is clearly erroneous, fraud or security checks are not satisfied, a service is unavailable, a third-party provider rejects the order, or the order would breach law or provider rules. Any payment taken for an unaccepted order will be returned.
        </p>
      </PolicySection>

      <PolicySection number="6" title="Prices, payments and subscriptions">
        <p>
          Prices, taxes, billing intervals and minimum terms are displayed before purchase or recorded in the applicable quotation or order. Payments may be processed by Stripe or another disclosed payment provider. The Company does not normally receive full card details.
        </p>
        <p>
          Recurring subscriptions continue for the stated billing period until cancelled in accordance with the applicable service terms. Cancellation stops future renewals; it does not automatically reverse charges already validly incurred.
        </p>
        <p>
          If a payment is overdue, we may retry payment, restrict paid features, suspend the affected service or terminate it after reasonable notice. You remain responsible for charges properly due up to the effective cancellation or termination date.
        </p>
      </PolicySection>

      <PolicySection number="7" title="Consumer cancellation rights">
        <p>
          Consumers who enter a distance contract may have a statutory right to cancel within 14 days without giving a reason. The cancellation period normally begins on the day after the contract is entered into for services and digital content, subject to the applicable law and any exceptions.
        </p>
        <p>
          If you expressly request that a service begins during the cancellation period, you may have to pay a proportionate amount for work supplied before cancellation. For digital content supplied immediately, the statutory cancellation right may be lost only where the required express consent and acknowledgement have been obtained.
        </p>
        <p>
          Custom or personalised work, domain registrations, activated third-party products and other services may be subject to legal or practical restrictions described before purchase. These restrictions do not affect remedies for faulty, misdescribed or improperly supplied services.
        </p>
        <p>
          To cancel, email <a href="mailto:complaints@jagroupservices.co.uk">complaints@jagroupservices.co.uk</a> with your name, order or account reference, the relevant brand and a clear statement that you wish to cancel.
        </p>
      </PolicySection>

      <PolicySection number="8" title="Refunds and service remedies">
        <p>
          Refund eligibility depends on the service, the reason for the request, work already completed, third-party charges already committed and your statutory rights. Where services are not performed with reasonable care and skill, are not as agreed, or digital content does not conform to the contract, consumers may be entitled to repeat performance, repair, replacement, a price reduction or refund as provided by law.
        </p>
        <p>
          Detailed refund rules and the complaints process are set out in our <Link to="/complaints-policy">Complaints &amp; Refunds Policy</Link>. Nothing in these Terms limits mandatory consumer rights.
        </p>
      </PolicySection>

      <PolicySection number="9" title="Accounts and security">
        <p>You are responsible for keeping account credentials secure and for activity carried out through your account unless caused by our breach.</p>
        <ul>
          <li>Use accurate registration and recovery information.</li>
          <li>Do not share credentials or bypass multi-factor authentication controls.</li>
          <li>Tell us promptly about suspected compromise, unauthorised access or incorrect account ownership.</li>
          <li>Follow reasonable identity, fraud-prevention and security checks.</li>
        </ul>
        <p>
          We may temporarily restrict access where reasonably necessary to protect customers, systems, data, payment integrity or third-party providers.
        </p>
      </PolicySection>

      <PolicySection number="10" title="Acceptable use">
        <p>You must not use a Company service to:</p>
        <ul>
          <li>break the law, infringe rights, facilitate fraud or misrepresent identity or authority;</li>
          <li>upload malware, probe systems without permission, evade security controls or disrupt availability;</li>
          <li>publish unlawful, threatening, abusive, discriminatory, exploitative or harmful content;</li>
          <li>send spam, conduct deceptive marketing or scrape data contrary to law or service rules;</li>
          <li>resell, copy or commercially exploit a service except where expressly permitted; or</li>
          <li>use a service in a way that places another person, especially a child or vulnerable adult, at risk.</li>
        </ul>
        <p>
          We may remove content, suspend functionality, preserve evidence or report matters to the appropriate authority where reasonably necessary and lawful.
        </p>
      </PolicySection>

      <PolicySection number="11" title="Customer content and intellectual property">
        <p>
          You retain ownership of content and materials you lawfully provide. You grant the Company a limited, non-exclusive licence to host, copy, process, display and transmit that content only as needed to provide, secure, support and improve the contracted service.
        </p>
        <p>
          You confirm that you have the rights and permissions needed for content you provide. The Company and its licensors retain ownership of platform software, templates, systems, branding, documentation and other intellectual property except where a written agreement states otherwise.
        </p>
        <p>
          Intellectual-property arrangements for a Managed Website Services project may be set out in its quotation, statement of work or handover terms.
        </p>
      </PolicySection>

      <PolicySection number="12" title="Availability, changes and maintenance">
        <p>
          We aim to provide reliable services but cannot guarantee uninterrupted or error-free operation. Maintenance, security work, supplier outages, internet failures and events outside reasonable control may affect availability.
        </p>
        <p>
          We may make reasonable changes to improve security, comply with law, respond to provider changes or develop functionality. Material changes that significantly disadvantage an active paid customer will be communicated where reasonably practicable, together with any cancellation right required by law or contract.
        </p>
      </PolicySection>

      <PolicySection number="13" title="Liability">
        <p>
          Nothing in these Terms excludes or limits liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, breach of statutory title obligations, or any liability that cannot lawfully be excluded.
        </p>
        <p>
          For consumers, we are responsible for foreseeable loss or damage caused by our breach of contract or failure to use reasonable care and skill. We are not responsible for loss that was not foreseeable, business loss arising from consumer use, or failure caused solely by a third-party service outside our reasonable control where we have exercised reasonable care in selecting and managing the relationship.
        </p>
        <p>
          For business customers, any additional liability limits will be stated in the relevant business service terms, quotation or statement of work. In the absence of a specific written limit, liability will be assessed under applicable law and these Terms.
        </p>
      </PolicySection>

      <PolicySection number="14" title="Suspension and termination">
        <p>
          You may cancel or terminate in accordance with the applicable service terms. We may suspend or terminate a service for material breach, non-payment, unlawful or harmful use, security risk, provider withdrawal, or where continuing the service would be unlawful or technically impossible.
        </p>
        <p>
          Except in urgent security, safeguarding, fraud or legal circumstances, we will normally give reasonable notice and an opportunity to remedy a remediable breach. Provisions intended to continue after termination, including payment obligations, intellectual property, confidentiality and liability provisions, remain effective.
        </p>
      </PolicySection>

      <PolicySection number="15" title="Privacy, complaints and contact">
        <p>
          Personal data is handled in accordance with our <Link to="/privacy-policy">Privacy Policy</Link>. Cookie information is available in our <Link to="/cookies-policy">Cookies Policy</Link>.
        </p>
        <p>
          Complaints, cancellations and refund requests are handled under our <Link to="/complaints-policy">Complaints &amp; Refunds Policy</Link>. Email <a href="mailto:complaints@jagroupservices.co.uk">complaints@jagroupservices.co.uk</a> or write to the registered office shown above.
        </p>
      </PolicySection>

      <PolicySection number="16" title="General legal terms">
        <p>
          If any provision is unenforceable, it will be adjusted or removed only to the minimum extent necessary and the remaining provisions will continue. A delay in enforcing a right is not a waiver. You may not transfer a contract without our written consent, but we may transfer it as part of a genuine corporate reorganisation or business transfer provided this does not reduce consumer rights.
        </p>
        <p>
          These Terms are governed by the law of England and Wales. Consumers may also benefit from mandatory protections and bring proceedings in the courts available to them under applicable law. Business customers submit to the exclusive jurisdiction of the courts of England and Wales unless a written agreement states otherwise.
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
