import { Link } from 'react-router-dom';

import { PolicyLayout, PolicyNotice, PolicySection } from '@/components/legal/PolicyLayout';

const effectiveDate = '6 August 2026';

export default function ComplaintsPolicyPage() {
  return (
    <PolicyLayout
      title="Complaints & Refunds Policy"
      description="How JA Group Services Ltd receives, investigates and reviews complaints, cancellations and refund requests across its corporate and Sousa Murray services."
      canonicalPath="/complaints-policy"
      effectiveDate={effectiveDate}
    >
      <PolicySection number="1" title="Purpose and scope">
        <p>
          JA Group Services Ltd aims to provide clear, fair and reliable services. This Policy explains how customers, users, suppliers, partners and other affected persons may raise a complaint and how cancellation or refund requests are assessed.
        </p>
        <p>
          It applies to the corporate website and the services operated under Sousa Murray Domains, Sousa Murray Sites, Sousa Murray Planeia, Sousa Murray Profiles and Sousa Murray eLearning. It also applies to central account, billing, customer-support and administrative functions.
        </p>
        <p>
          A complaint is an expression of dissatisfaction that requires a response. A routine request for help, information or a technical fix may initially be handled as a support enquiry, but you may ask for it to be recorded as a complaint at any time.
        </p>
        <PolicyNotice title="Your legal rights remain protected">
          <p>
            This Policy does not replace or reduce any statutory right, contractual remedy, chargeback right, data-protection right or right to seek independent advice.
          </p>
        </PolicyNotice>
      </PolicySection>

      <PolicySection number="2" title="How to make a complaint or refund request">
        <p>Email <a href="mailto:complaints@jagroupservices.co.uk">complaints@jagroupservices.co.uk</a> or use the relevant website contact or support route. Please include:</p>
        <ul>
          <li>your name and preferred contact details;</li>
          <li>the relevant Sousa Murray service, account, order, invoice or customer reference;</li>
          <li>what happened and when;</li>
          <li>the outcome you are seeking;</li>
          <li>copies of relevant correspondence, screenshots or evidence; and</li>
          <li>any accessibility, vulnerability or communication need we should consider.</li>
        </ul>
        <p>
          You do not need to use formal or legal language. A representative may complain for you where they have appropriate authority. We may verify identity or authority before discussing confidential information or changing an account.
        </p>
        <p>
          Postal complaints may be sent to JA Group Services Ltd, 167-169 Great Portland Street, 5th Floor, London, W1W 5PF.
        </p>
      </PolicySection>

      <PolicySection number="3" title="Our complaint-handling standards">
        <p>We will aim to:</p>
        <ul>
          <li>acknowledge a complaint within five working days;</li>
          <li>identify the issues, relevant service and requested outcome;</li>
          <li>investigate impartially and review relevant records;</li>
          <li>coordinate with a provider where the underlying service is provider-controlled;</li>
          <li>keep you informed if more time or information is needed; and</li>
          <li>give a clear written outcome with reasons and any next steps.</li>
        </ul>
        <p>
          We aim to issue a substantive response within 20 working days. Complex, safeguarding, fraud, technical or provider-dependent matters may take longer. If so, we will explain the delay and provide an updated target date.
        </p>
      </PolicySection>

      <PolicySection number="4" title="Complaint stages">
        <h3>Stage 1 — Initial investigation</h3>
        <p>
          The relevant operational team reviews the matter, attempts to resolve it and issues a written response. Where appropriate, we may offer an explanation, correction, apology, repeat performance, service credit, refund or another proportionate remedy.
        </p>
        <h3>Stage 2 — Internal review</h3>
        <p>
          If you remain dissatisfied, request a review within 20 working days of the Stage 1 response. Explain what you believe was missed or why the outcome is unreasonable. A person not responsible for the original decision will review the complaint where practicable.
        </p>
        <p>
          We aim to complete the review within 15 working days. The review response is normally our final internal response and will identify any available external route.
        </p>
        <h3>Urgent handling</h3>
        <p>
          Immediate safety, safeguarding, fraud, service-security and suspected personal-data incidents may be escalated outside the ordinary timetable. Emergencies should be reported to the appropriate emergency service first.
        </p>
      </PolicySection>

      <PolicySection number="5" title="Working with third-party providers">
        <p>
          Some products and services are supplied or controlled by authorised third parties, including domain, hosting, payment, identity, training or activity providers. JA Group Services Ltd may provide first-line support and coordinate the matter, but a provider may need to decide a technical action, registry outcome, course decision, supplier refund or other provider-controlled remedy.
        </p>
        <p>
          We will explain the provider’s role, share relevant information lawfully, keep a record of escalation and communicate the outcome where we are able to do so. A provider’s separate terms and complaint route may also apply.
        </p>
      </PolicySection>

      <PolicySection number="6" title="General refund principles">
        <p>A refund is considered by reference to:</p>
        <ul>
          <li>your statutory rights and the type of contract;</li>
          <li>the applicable order, quotation, subscription or service-specific terms;</li>
          <li>whether the service has started, digital content or access has been supplied, or work has been completed;</li>
          <li>non-recoverable third-party charges already committed;</li>
          <li>whether the service was faulty, misdescribed, delayed or not supplied with reasonable care and skill;</li>
          <li>the reason for cancellation and any required consent to early performance; and</li>
          <li>any credit, repeat performance, repair or alternative remedy already provided.</li>
        </ul>
        <p>
          We do not use a “no refunds” rule to remove legal rights. Equally, cancellation or dissatisfaction does not automatically create a right to recover charges for services properly supplied or third-party costs validly committed.
        </p>
      </PolicySection>

      <PolicySection number="7" title="Consumer cooling-off rights">
        <p>
          A consumer entering an eligible distance or off-premises service contract normally has 14 days from the day after the contract is entered into to cancel without giving a reason. Different rules and exceptions may apply depending on the service and how it is supplied.
        </p>
        <p>
          If you expressly ask us to begin a service during the cancellation period, we may deduct a proportionate amount for work supplied before cancellation. If a service has been fully performed after the required request and acknowledgement, the cancellation right may be lost.
        </p>
        <p>
          For digital content supplied immediately, the statutory cancellation right may be lost only where you expressly consent to supply beginning during the cancellation period and acknowledge the consequence required by law.
        </p>
        <p>
          To exercise a cancellation right, send a clear statement to <a href="mailto:complaints@jagroupservices.co.uk">complaints@jagroupservices.co.uk</a>. Include your name, order reference and the service being cancelled. A reason is helpful but is not required where a statutory no-reason cancellation right applies.
        </p>
      </PolicySection>

      <PolicySection number="8" title="Service-specific refund considerations">
        <h3>Sousa Murray Domains</h3>
        <p>
          Domain registrations, renewals, transfers, hosting activations and other provider products may create immediate and non-recoverable supplier charges. Once a domain or provider product has been submitted or activated, a change-of-mind refund may be unavailable. We will still provide any remedy required by law, correct Company error and apply any available provider refund policy.
        </p>
        <h3>Sousa Murray Sites</h3>
        <p>
          Managed Website Services are often customised. A quotation or statement of work may divide fees into deposits, milestones, third-party purchases and recurring support. On cancellation, we may retain or charge a fair amount for completed work and committed costs, subject to consumer cancellation rights and remedies for defective service.
        </p>
        <h3>Sousa Murray Planeia and Sousa Murray Profiles</h3>
        <p>
          Cancelling a subscription stops future renewal in accordance with the plan terms. Charges for an elapsed billing period are not automatically refundable solely because the service was unused. We will assess faults, duplicate charges, unauthorised payments and statutory cancellation rights separately.
        </p>
        <h3>Sousa Murray eLearning</h3>
        <p>
          Course enrolment, licence allocation or access-code issue may commit a non-recoverable provider charge. Refund availability may therefore change once enrolment or access has been processed. This does not remove remedies where a course is misdescribed, access is not supplied as agreed, or another legal right applies.
        </p>
      </PolicySection>

      <PolicySection number="9" title="Faulty, misdescribed or poorly performed services">
        <p>
          Consumers are entitled to services performed with reasonable care and skill and in accordance with binding information given about the service. Where the law requires it, we may provide repeat performance within a reasonable time and without significant inconvenience. If repeat performance is impossible or not completed as required, a proportionate price reduction may be due.
        </p>
        <p>
          Digital content must meet the applicable legal standards. Depending on the issue, remedies may include repair, replacement, a price reduction or compensation for qualifying damage to a device or other digital content.
        </p>
        <p>
          Business-customer remedies are governed by the applicable contract and law, including any statement of work, service level, acceptance process or agreed limitation of liability.
        </p>
      </PolicySection>

      <PolicySection number="10" title="Approved refund processing">
        <p>
          An approved refund is normally returned to the original payment method unless law, fraud prevention or the payment provider requires another approach. We may need to verify the payer, account and transaction before processing it.
        </p>
        <p>
          Where a statutory distance-cancellation refund is due for a service or digital content, it will be made without undue delay and normally within 14 days after we are informed of the cancellation, subject to any lawful deduction. Other approved refunds are normally submitted within 10 working days of approval. Banks and payment providers may take additional time to display the credit.
        </p>
        <p>
          Refunds do not include consequential loss, time spent or third-party costs unless required by law or expressly agreed.
        </p>
      </PolicySection>

      <PolicySection number="11" title="Payment disputes and chargebacks">
        <p>
          Please contact us promptly about an unknown, duplicate or disputed charge so we can investigate and, where appropriate, correct it. Contacting us does not remove any right to approach your card issuer, bank or payment provider.
        </p>
        <p>
          We may provide transaction, delivery and account records to a payment provider when responding to a chargeback or fraud investigation. We will handle personal data in accordance with our <Link to="/privacy-policy">Privacy Policy</Link>.
        </p>
      </PolicySection>

      <PolicySection number="12" title="External advice and escalation">
        <p>
          Consumers in England and Wales may obtain independent consumer advice through Citizens Advice. Matters may be referred to Trading Standards through the appropriate consumer-advice route.
        </p>
        <p>
          Data-protection concerns may be raised with the Information Commissioner’s Office. Details are available through our <Link to="/privacy-centre">Privacy Centre</Link>.
        </p>
        <p>
          We do not claim membership of a sector-specific ombudsman or alternative dispute resolution scheme unless a final response expressly identifies one. Where law or a relevant contract requires an ADR route, we will provide the applicable details.
        </p>
        <p>
          You may seek legal advice or use a court or tribunal with jurisdiction. We encourage proportionate attempts to resolve the matter first where appropriate.
        </p>
      </PolicySection>

      <PolicySection number="13" title="Unreasonable conduct and repeat complaints">
        <p>
          We will not reject a complaint merely because it is critical, persistent or firmly expressed. However, we may manage contact where conduct becomes threatening, abusive, discriminatory, knowingly false, excessively repetitive or disproportionately disruptive.
        </p>
        <p>
          Any restriction will be proportionate, recorded and explained. It will not prevent us from considering genuinely new evidence, urgent risk, safeguarding information or a statutory request.
        </p>
      </PolicySection>

      <PolicySection number="14" title="Records, learning and confidentiality">
        <p>
          We keep proportionate complaint and refund records for accountability, trend analysis, legal compliance, service improvement and the prevention of fraud or repeated error. Access is limited according to role and need.
        </p>
        <p>
          Complaint information is handled confidentially but may be shared with relevant staff, providers, advisers, insurers, regulators or authorities where necessary and lawful.
        </p>
      </PolicySection>

      <PolicySection number="15" title="Contact and policy review">
        <p>
          Complaints and refund requests: <a href="mailto:complaints@jagroupservices.co.uk">complaints@jagroupservices.co.uk</a>.<br />
          Data-protection matters: <a href="mailto:dataprotection@jagroupservices.co.uk">dataprotection@jagroupservices.co.uk</a>.<br />
          Postal address: JA Group Services Ltd, 167-169 Great Portland Street, 5th Floor, London, W1W 5PF.
        </p>
        <p>
          We review this Policy when services, law or complaint arrangements materially change. The date at the top identifies the current published version.
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
