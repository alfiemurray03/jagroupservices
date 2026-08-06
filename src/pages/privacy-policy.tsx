import { Link } from 'react-router-dom';

import { PolicyLayout, PolicyNotice, PolicySection } from '@/components/legal/PolicyLayout';

const effectiveDate = '6 August 2026';

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      description="How JA Group Services Ltd collects, uses, shares, protects and retains personal data across the corporate website and Sousa Murray services."
      canonicalPath="/privacy-policy"
      effectiveDate={effectiveDate}
    >
      <PolicySection number="1" title="Who we are">
        <p>
          JA Group Services Ltd is a company registered in England and Wales under company number 16314179. Our registered office is 167-169 Great Portland Street, 5th Floor, London, W1W 5PF. Our Information Commissioner’s Office registration number is ZB877370.
        </p>
        <p>
          For the personal data described in this Policy, JA Group Services Ltd is normally the <strong>controller</strong>. This means we decide why and how that personal data is used. A service-specific notice may explain where another organisation acts as an independent controller or where we process data for another organisation.
        </p>
        <p>
          Sousa Murray is our master brand. Sousa Murray Domains, Sousa Murray Sites, Sousa Murray Planeia, Sousa Murray Profiles and Sousa Murray eLearning are service brands of JA Group Services Ltd and are not separate legal entities.
        </p>
        <PolicyNotice title="Data Protection Officer">
          <p>
            Our Data Protection Officer is Mr Alfie Thomas Holywood Murray. Contact him at <a href="mailto:alfie@jagroupservices.co.uk">alfie@jagroupservices.co.uk</a> or through our <Link to="/privacy-centre">Privacy Centre</Link>.
          </p>
        </PolicyNotice>
      </PolicySection>

      <PolicySection number="2" title="Scope of this Policy">
        <p>This Policy applies to personal data processed through:</p>
        <ul>
          <li>jagroupservices.co.uk and Company-operated subdomains;</li>
          <li>the Sousa Murray websites, accounts and service areas;</li>
          <li>JA Group Services ID and connected customer-login services;</li>
          <li>contact, support, complaint, safeguarding and data-protection channels;</li>
          <li>orders, payments, subscriptions, quotations and service delivery;</li>
          <li>supplier, partner, affiliate, investor and corporate enquiries; and</li>
          <li>our internal administration, security and governance systems.</li>
        </ul>
        <p>
          Third-party websites and services have their own privacy information. Their notices apply when they independently decide how to use personal data.
        </p>
      </PolicySection>

      <PolicySection number="3" title="Personal data we may collect">
        <p>Depending on how you interact with us, we may process:</p>
        <ul>
          <li><strong>Identity data:</strong> name, title, date of birth where necessary, customer number, account identifiers and identity-verification information.</li>
          <li><strong>Contact data:</strong> email address, telephone number, postal address, organisation and communication preferences.</li>
          <li><strong>Account data:</strong> login identifiers, role, account status, authentication events, recovery information and linked-service records.</li>
          <li><strong>Transaction data:</strong> products or services purchased, quotations, invoices, payment status, subscription information, refunds and billing correspondence.</li>
          <li><strong>Service data:</strong> profiles, plans, website content, domain information, learner details, course enrolments, support history and information you enter into a platform.</li>
          <li><strong>Technical and usage data:</strong> IP address, device and browser information, timestamps, referral source, pages viewed, diagnostic information, cookies and security logs.</li>
          <li><strong>Communications data:</strong> emails, forms, telephone notes, complaint records, survey responses and other correspondence.</li>
          <li><strong>Corporate relationship data:</strong> information about suppliers, professional advisers, prospective partners, affiliates, investors, shareholders and representatives.</li>
          <li><strong>Risk and compliance data:</strong> fraud indicators, sanctions or due-diligence information where relevant, access controls, safeguarding information and incident records.</li>
        </ul>
        <p>
          We do not intentionally collect excessive information. Please do not send passwords, one-time codes or full payment-card details through ordinary email or contact forms.
        </p>
      </PolicySection>

      <PolicySection number="4" title="How we obtain personal data">
        <p>We may receive personal data:</p>
        <ul>
          <li>directly from you when you create an account, place an order, contact us or use a service;</li>
          <li>from an organisation, employer or authorised representative acting for you;</li>
          <li>from identity, payment, reseller, training, hosting, analytics or technology providers;</li>
          <li>from publicly available sources, such as Companies House or professional websites, where appropriate;</li>
          <li>through cookies, server logs and security technologies; and</li>
          <li>from another Sousa Murray service where central account, support, security or billing administration requires it.</li>
        </ul>
        <p>
          Where we obtain personal data from another source, we provide privacy information as required unless an exemption applies.
        </p>
      </PolicySection>

      <PolicySection number="5" title="Purposes and lawful bases">
        <p>We use personal data only where we have a lawful basis. The main purposes and bases are:</p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border text-foreground">
                <th className="px-3 py-3 font-bold">Purpose</th>
                <th className="px-3 py-3 font-bold">Typical lawful basis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-3 py-3">Create and administer accounts, orders, subscriptions and services</td><td className="px-3 py-3">Contract; steps at your request before contract</td></tr>
              <tr><td className="px-3 py-3">Take payments, issue invoices, manage arrears and process refunds</td><td className="px-3 py-3">Contract; legal obligation; legitimate interests</td></tr>
              <tr><td className="px-3 py-3">Provide support, investigate complaints and communicate service information</td><td className="px-3 py-3">Contract; legal obligation; legitimate interests</td></tr>
              <tr><td className="px-3 py-3">Secure accounts, prevent fraud, investigate incidents and protect systems</td><td className="px-3 py-3">Legitimate interests; legal obligation</td></tr>
              <tr><td className="px-3 py-3">Comply with company, tax, consumer, safeguarding and data-protection duties</td><td className="px-3 py-3">Legal obligation; substantial public interest where applicable</td></tr>
              <tr><td className="px-3 py-3">Develop, test, monitor and improve services</td><td className="px-3 py-3">Legitimate interests; consent where required for optional technologies</td></tr>
              <tr><td className="px-3 py-3">Send direct marketing and measure optional analytics</td><td className="px-3 py-3">Consent, or legitimate interests where permitted by law</td></tr>
              <tr><td className="px-3 py-3">Assess suppliers, partners, affiliates and corporate opportunities</td><td className="px-3 py-3">Legitimate interests; contract; legal obligation</td></tr>
              <tr><td className="px-3 py-3">Establish, exercise or defend legal claims</td><td className="px-3 py-3">Legitimate interests; legal obligation</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Where we rely on legitimate interests, we consider the necessity of the processing, its benefit and its effect on individuals. You may ask for more information about a relevant assessment.
        </p>
      </PolicySection>

      <PolicySection number="6" title="Special category, criminal-offence and safeguarding data">
        <p>
          We do not seek sensitive data unless it is necessary. In limited circumstances, a support, accessibility, safeguarding, identity or incident matter may involve health information, vulnerability information, biometric or identity evidence, or information relating to alleged criminal conduct.
        </p>
        <p>
          We process this information only where an additional legal condition applies, access is restricted and the information is relevant and proportionate. Safeguarding information may be shared with emergency services, local authorities or other appropriate bodies where necessary to protect a person or comply with law.
        </p>
      </PolicySection>

      <PolicySection number="7" title="Who we share personal data with">
        <p>We may share relevant personal data with:</p>
        <ul>
          <li>cloud hosting, security, communications, customer-support and software providers;</li>
          <li>Microsoft and other identity or authentication providers used for account access;</li>
          <li>Stripe or another disclosed payment provider;</li>
          <li>authorised domain, hosting, reseller, training and course providers where needed to fulfil an order;</li>
          <li>professional advisers, auditors, insurers, accountants and corporate service providers;</li>
          <li>prospective or actual investors, purchasers or group companies subject to appropriate confidentiality and due diligence;</li>
          <li>regulators, courts, law-enforcement bodies, tax authorities and public authorities where required or lawful; and</li>
          <li>another person or organisation where you instruct or authorise us to share it.</li>
        </ul>
        <p>
          We require processors acting on our behalf to follow written instructions, use suitable security and protect confidentiality. Independent controllers are responsible for their own compliance and notices.
        </p>
        <p>We do not sell personal data to advertisers.</p>
      </PolicySection>

      <PolicySection number="8" title="International transfers">
        <p>
          Some suppliers may process personal data outside the United Kingdom. Where an international transfer is restricted by law, we use an approved safeguard, such as UK adequacy regulations, the UK International Data Transfer Agreement, the UK Addendum to approved standard contractual clauses, or another lawful mechanism.
        </p>
        <p>
          You may contact the Data Protection Officer for information about the safeguard used for a relevant transfer, subject to legitimate confidentiality restrictions.
        </p>
      </PolicySection>

      <PolicySection number="9" title="Retention">
        <p>
          We keep personal data only for as long as reasonably necessary for the purpose collected, including service delivery, account administration, legal and tax requirements, fraud prevention, dispute handling and the establishment or defence of claims.
        </p>
        <p>Retention periods vary. We consider:</p>
        <ul>
          <li>whether an account, subscription, course, domain or project remains active;</li>
          <li>statutory accounting, tax, company and limitation periods;</li>
          <li>provider obligations and technical backup cycles;</li>
          <li>the sensitivity and risk associated with the information; and</li>
          <li>whether a complaint, investigation, safeguarding concern or legal hold remains open.</li>
        </ul>
        <p>
          When information is no longer required, we delete or anonymise it, subject to technically necessary backup and archival cycles.
        </p>
      </PolicySection>

      <PolicySection number="10" title="Security">
        <p>
          We use organisational and technical measures designed to protect confidentiality, integrity and availability. Measures may include access control, multi-factor authentication, encryption in transit, logging, vulnerability management, backups, role-based permissions, supplier assessment and incident-response procedures.
        </p>
        <p>
          No internet service can be guaranteed completely secure. You should use a strong unique password, protect authentication codes and tell us promptly if you suspect unauthorised access.
        </p>
      </PolicySection>

      <PolicySection number="11" title="Cookies, analytics and marketing">
        <p>
          Strictly necessary technologies support security, account access, consent storage and core website functions. Optional analytics and functional technologies are disabled until the required choice has been recorded. More information is available in our <Link to="/cookies-policy">Cookies Policy</Link>.
        </p>
        <p>
          You may opt out of direct marketing at any time by using an unsubscribe mechanism or contacting us. Objections to direct marketing are honoured for future marketing, although we may keep a minimal suppression record to ensure the preference is respected.
        </p>
      </PolicySection>

      <PolicySection number="12" title="Your data-protection rights">
        <p>Depending on the circumstances, you may have the right to:</p>
        <ul>
          <li>be informed about how personal data is used;</li>
          <li>request access to personal data and supplementary information;</li>
          <li>have inaccurate data corrected or incomplete data completed;</li>
          <li>request erasure in specified circumstances;</li>
          <li>request restriction of processing in specified circumstances;</li>
          <li>receive eligible data in a portable format;</li>
          <li>object to processing based on legitimate interests and object at any time to direct marketing;</li>
          <li>withdraw consent for future processing where consent is the basis; and</li>
          <li>request safeguards relating to qualifying solely automated decisions.</li>
        </ul>
        <p>
          Rights are not always absolute. We may need to verify identity or authority and may ask for information needed to locate the relevant records. We normally respond without undue delay and within one calendar month, subject to lawful extensions and exemptions.
        </p>
        <p>
          Submit a request through the <Link to="/privacy-centre">Privacy Centre</Link> or email <a href="mailto:alfie@jagroupservices.co.uk">alfie@jagroupservices.co.uk</a>.
        </p>
      </PolicySection>

      <PolicySection number="13" title="Automated decisions and profiling">
        <p>
          We may use automated signals to support fraud prevention, security monitoring, account risk assessment, content moderation or service personalisation. We do not ordinarily make decisions producing legal or similarly significant effects solely by automated means unless this is lawful and appropriate safeguards apply.
        </p>
        <p>
          Where a relevant right applies, you may request information, human involvement, express your point of view and challenge the outcome.
        </p>
      </PolicySection>

      <PolicySection number="14" title="Children and age-restricted services">
        <p>
          The corporate website is not directed specifically at children. Certain services are restricted to adults or have service-specific age rules. We may take proportionate steps to confirm age or authority where necessary.
        </p>
        <p>
          If you believe a child’s personal data has been supplied without appropriate authority, contact the Data Protection Officer so the matter can be assessed.
        </p>
      </PolicySection>

      <PolicySection number="15" title="Complaints and the Information Commissioner">
        <p>
          Please contact the Data Protection Officer first so we can investigate. You also have the right to complain to the Information Commissioner’s Office. Its complaint service is available at <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">ico.org.uk/make-a-complaint</a>.
        </p>
        <p>
          A privacy complaint may also be handled under our <Link to="/complaints-policy">Complaints &amp; Refunds Policy</Link>, but using that process does not remove your right to contact the Information Commissioner.
        </p>
      </PolicySection>

      <PolicySection number="16" title="Changes and contact details">
        <p>
          We may update this Policy to reflect legal, regulatory, organisational or service changes. Material changes will be highlighted where reasonably practicable. The effective and review dates shown at the top identify the current published version.
        </p>
        <p>
          General enquiries: <a href="mailto:contact@jagroupservices.co.uk">contact@jagroupservices.co.uk</a>.<br />
          Data Protection Officer: <a href="mailto:alfie@jagroupservices.co.uk">alfie@jagroupservices.co.uk</a>.<br />
          Postal address: JA Group Services Ltd, 167-169 Great Portland Street, 5th Floor, London, W1W 5PF.
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
