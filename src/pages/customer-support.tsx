import {
  BadgePoundSterling,
  CircleHelp,
  FileWarning,
  GraduationCap,
  Handshake,
  Headphones,
  KeyRound,
  LifeBuoy,
  LockKeyhole,
  Mail,
  MessageSquareWarning,
  ShieldAlert,
  ShieldCheck,
  UserRoundCheck,
} from 'lucide-react';

import CorporateInformationPage from '@/components/CorporateInformationPage';

const sections = [
  {
    eyebrow: 'Choose the right route',
    title: 'Support for customers and service users',
    description:
      'Using the correct route helps us identify the responsible service, preserve the right records and respond through the appropriate team or escalation process.',
    columns: 3 as const,
    cards: [
      {
        icon: CircleHelp,
        title: 'General customer support',
        description:
          'Questions about a JA Group Services website, platform, service, account or customer journey.',
        items: ['Include the service or platform name', 'Provide any reference number', 'Do not include passwords or authentication codes'],
        href: '/contactus',
        linkLabel: 'Contact customer support',
      },
      {
        icon: GraduationCap,
        title: 'Aptenvo learner and enrolment support',
        description:
          'Help with Aptenvo course information, enrolment, access instructions, learner administration or provider escalation.',
        items: [
          'Include the course title and enrolment reference',
          'Explain whether the issue concerns enrolment, access, completion or certification',
          'Provider-controlled learning or assessment matters may need to be escalated',
        ],
        href: 'https://aptenvo.jagroupservices.co.uk/',
        linkLabel: 'Visit Aptenvo',
        external: true,
      },
      {
        icon: KeyRound,
        title: 'Account access and recovery',
        description:
          'Help where you cannot access an account, need to update account details or believe an account may be compromised.',
        items: ['Use the email address linked to the account where possible', 'Explain what access you have lost', 'We may need to verify identity before making changes'],
        href: '/contactus',
        linkLabel: 'Request account assistance',
      },
      {
        icon: BadgePoundSterling,
        title: 'Billing and payments',
        description:
          'Questions about quotations, Stripe payment links, invoices, course enrolments, renewals, subscriptions or payment records.',
        items: ['Include the invoice, enrolment or payment reference', 'State the relevant service', 'Never email full card details'],
        href: '/contactus',
        linkLabel: 'Raise a billing enquiry',
      },
      {
        icon: MessageSquareWarning,
        title: 'Complaints',
        description:
          'Use the formal complaints process if you are dissatisfied with our service, administration, communication or handling of a matter.',
        items: ['Explain what happened', 'Tell us the outcome you are seeking', 'Include earlier correspondence or references'],
        href: '/complaints-policy',
        linkLabel: 'Read the Complaints Policy',
      },
      {
        icon: LockKeyhole,
        title: 'Privacy and data rights',
        description:
          'Contact the Data Protection Officer about access, correction, deletion, restriction, objection or other personal-data matters.',
        items: ['Rights are considered under applicable data protection law', 'Identity checks may be required', 'Use the Privacy Centre for the correct route'],
        href: '/privacy-centre',
        linkLabel: 'Open the Privacy Centre',
      },
      {
        icon: ShieldAlert,
        title: 'Security concerns',
        description:
          'Report a suspected vulnerability, phishing message, compromised account or other security concern through the correct security route.',
        items: ['Do not publish vulnerability details', 'Avoid accessing customer data', 'Follow the responsible disclosure policy'],
        href: '/security',
        linkLabel: 'Go to Security and Disclosure',
      },
      {
        icon: UserRoundCheck,
        title: 'Safeguarding concerns',
        description:
          'Raise a concern involving a child, young person or adult who may be at risk in connection with one of our services or interactions.',
        items: ['Call 999 where somebody is in immediate danger', 'Share only relevant information', 'The Designated Safeguarding Officer reviews concerns'],
        href: '/safeguarding',
        linkLabel: 'Go to Safeguarding and Trust',
      },
      {
        icon: Handshake,
        title: 'Partnership and supplier enquiries',
        description:
          'Commercial partnerships, supplier introductions, training-provider relationships, platform integrations and other business-to-business discussions.',
        href: '/partner-with-us',
        linkLabel: 'Partner with us',
      },
      {
        icon: Mail,
        title: 'Email correspondence',
        description:
          'For matters that do not fit another route, email our public contact address and clearly identify the subject and relevant service.',
        href: 'mailto:contact@jagroupservices.co.uk',
        linkLabel: 'contact@jagroupservices.co.uk',
      },
    ],
  },
  {
    eyebrow: 'Help us investigate',
    title: 'What to include when contacting us',
    description:
      'Clear information reduces delays and helps us route your request without repeatedly asking for basic details.',
    columns: 2 as const,
    cards: [
      {
        icon: FileWarning,
        title: 'Describe the issue clearly',
        description:
          'Explain what happened, when it happened, which service or Aptenvo course was involved and what you expected to happen instead.',
      },
      {
        icon: LifeBuoy,
        title: 'Include useful references',
        description:
          'Provide account, ticket, invoice, order, enrolment or complaint references where available. Do not send passwords, one-time codes or full payment-card details.',
      },
      {
        icon: ShieldCheck,
        title: 'Use a safe contact method',
        description:
          'For sensitive matters, use the contact route stated on the relevant policy page and avoid sending unnecessary special-category or third-party information.',
      },
      {
        icon: Headphones,
        title: 'Tell us the outcome sought',
        description:
          'State whether you need information, a correction, technical help, learner support, an investigation, an explanation or another specific resolution.',
      },
    ],
  },
] as const;

export default function CustomerSupportPage() {
  return (
    <CorporateInformationPage
      title="Customer Support Centre"
      pageTitle="Customer Support Centre | JA Group Services Ltd"
      description="Find the correct support route for Aptenvo courses and enrolments, accounts, billing, complaints, privacy, security, safeguarding and general customer enquiries."
      canonicalPath="/customer-support"
      badge="Help and Support"
      heroIcon={Headphones}
      introduction="The Customer Support Centre directs customers, Aptenvo learners, service users and business contacts to the right team, policy or escalation route across JA Group Services Ltd and its operating brands."
      notice={{
        icon: ShieldCheck,
        title: 'Keep account and payment information secure',
        description:
          'We will never ask you to send a password, one-time authentication code or full payment-card number by email. Where identity or enrolment verification is required, we will explain the appropriate process.',
      }}
      sections={sections}
      closingTitle="Still unsure where your enquiry belongs?"
      closingDescription="Send the details to our general contact route and identify the relevant brand, platform, service or Aptenvo course. We will direct the matter to the appropriate process."
      actions={[
        { label: 'Contact JA Group Services', href: '/contactus' },
        { label: 'Email contact@jagroupservices.co.uk', href: 'mailto:contact@jagroupservices.co.uk', variant: 'outline' },
      ]}
    />
  );
}
