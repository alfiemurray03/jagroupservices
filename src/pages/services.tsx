import {
  Blocks,
  Building2,
  CheckSquare2,
  Code2,
  CreditCard,
  FileSearch,
  Globe2,
  Headphones,
  Layers3,
  LifeBuoy,
  MonitorCog,
  Network,
  ReceiptText,
  Settings2,
  ShieldCheck,
  Workflow,
} from 'lucide-react';

import CorporateInformationPage from '@/components/CorporateInformationPage';

const sections = [
  {
    eyebrow: 'What we provide',
    title: 'Digital services built around practical business needs',
    description:
      'Our services are scoped around the customer’s requirements. Availability, delivery arrangements and pricing are confirmed in writing before work begins.',
    columns: 3 as const,
    cards: [
      {
        icon: MonitorCog,
        title: 'Managed Websites',
        description:
          'A fully managed website service for organisations that need a professional online presence without managing the technical work themselves.',
        items: [
          'Website design, build and launch coordination',
          'Managed updates, maintenance and technical administration',
          'Custom quotations based on scope and ongoing requirements',
        ],
        href: '/contactus',
        linkLabel: 'Request a managed website quotation',
      },
      {
        icon: Code2,
        title: 'Digital Platform Development',
        description:
          'Design and development of customer portals, account areas, operational tools and other purpose-built digital services.',
        items: [
          'Customer-facing portals and account journeys',
          'Administrative and operational interfaces',
          'Responsive web applications and service workflows',
        ],
        href: '/contactus',
        linkLabel: 'Discuss a platform requirement',
      },
      {
        icon: Workflow,
        title: 'Business Systems and Integrations',
        description:
          'Structured connections between websites, identity services, payment providers, customer support tools and operational systems.',
        items: [
          'Authentication and customer identity integrations',
          'Payment, support and communications workflows',
          'API-led connections subject to provider capability',
        ],
        href: '/contactus',
        linkLabel: 'Discuss an integration',
      },
      {
        icon: Globe2,
        title: 'Domain and Online Presence Services',
        description:
          'Domain-related support and online-presence services delivered directly or through the JA Domain Hub trading division.',
        items: [
          'Domain registration and account guidance',
          'Website and domain configuration support',
          'Clearly identified partner or reseller arrangements',
        ],
        href: 'https://jadomainhub.jagroupservices.co.uk/',
        linkLabel: 'Visit JA Domain Hub',
        external: true,
      },
      {
        icon: Settings2,
        title: 'Website Management and Maintenance',
        description:
          'Ongoing support for websites that need controlled changes, content updates, monitoring and technical upkeep.',
        items: [
          'Planned content and configuration changes',
          'Maintenance coordination and issue investigation',
          'Retained or quoted support arrangements',
        ],
        href: '/contactus',
        linkLabel: 'Ask about website management',
      },
      {
        icon: Blocks,
        title: 'Bespoke Digital Solutions',
        description:
          'Custom digital work where an off-the-shelf service does not meet the organisation’s operational or customer needs.',
        items: [
          'Requirements discovery and solution planning',
          'Prototype, phased or full-service delivery options',
          'Written scope, responsibilities and commercial terms',
        ],
        href: '/contactus',
        linkLabel: 'Tell us what you need',
      },
    ],
  },
  {
    eyebrow: 'How engagement works',
    title: 'A clear route from enquiry to delivery',
    description:
      'Custom work is not placed into a generic basket. We first understand the requirement, confirm responsibilities and provide the correct commercial route.',
    columns: 2 as const,
    cards: [
      {
        icon: FileSearch,
        title: '1. Initial enquiry and discovery',
        description:
          'You explain the outcome you need, the intended users, important deadlines and any systems or providers that may need to be involved.',
      },
      {
        icon: CheckSquare2,
        title: '2. Scope and suitability review',
        description:
          'We review whether the work is within our capability, identify dependencies and clarify what JA Group Services Ltd would and would not manage.',
      },
      {
        icon: ReceiptText,
        title: '3. Written quotation or proposal',
        description:
          'Where suitable, we provide written pricing, service scope, assumptions, delivery arrangements and any applicable recurring charges.',
      },
      {
        icon: CreditCard,
        title: '4. Secure payment and onboarding',
        description:
          'After the quotation is accepted, we provide the appropriate checkout or payment link through Stripe and begin the agreed onboarding process.',
      },
    ],
  },
  {
    eyebrow: 'Service standards',
    title: 'Clear ownership throughout the relationship',
    description:
      'Every engagement should make it understandable who is responsible, how support works and when a third-party provider is involved.',
    columns: 3 as const,
    cards: [
      {
        icon: Building2,
        title: 'Defined contracting entity',
        description:
          'Quotations and service documents identify whether JA Group Services Ltd is the direct provider, service manager, reseller or facilitator.',
      },
      {
        icon: Headphones,
        title: 'Structured customer support',
        description:
          'Customers receive clear support routes for operational questions, billing matters, complaints and provider-level escalation.',
      },
      {
        icon: ShieldCheck,
        title: 'Governance and data protection',
        description:
          'Service delivery is supported by documented governance, privacy, security and accountability arrangements appropriate to the engagement.',
      },
    ],
  },
] as const;

export default function ServicesPage() {
  return (
    <CorporateInformationPage
      title="Our Services"
      pageTitle="Our Services | JA Group Services Ltd"
      description="Explore managed websites, digital platform development, website management, integrations, domain services and bespoke digital solutions from JA Group Services Ltd."
      canonicalPath="/services"
      badge="Digital Services"
      heroIcon={Layers3}
      introduction="JA Group Services Ltd develops, manages and supports practical digital services for individuals and organisations. Most business services are priced according to scope, so our team will confirm the requirement before providing a quotation and secure Stripe payment route."
      notice={{
        icon: LifeBuoy,
        title: 'Custom pricing, properly scoped',
        description:
          'Business and managed services are not sold through an unrestricted public checkout. Contact us first so that we can confirm suitability, responsibilities and pricing before issuing a quotation or payment link.',
      }}
      sections={sections}
      closingTitle="Start with the outcome you need"
      closingDescription="Tell us what you are trying to build, improve or manage. We will review the request and explain the most appropriate next step."
      actions={[
        { label: 'Request a quotation', href: '/contactus' },
        { label: 'Visit Customer Support', href: '/customer-support', variant: 'outline' },
      ]}
    />
  );
}
