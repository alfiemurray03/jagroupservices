import {
  BadgeCheck,
  DatabaseZap,
  FileCheck2,
  FileLock2,
  FileUser,
  Fingerprint,
  Hand,
  LockKeyhole,
  Mail,
  RefreshCcw,
  ShieldCheck,
  ShieldQuestion,
  Trash2,
  UserCheck,
  UserRoundCog,
} from 'lucide-react';

import CorporateInformationPage from '@/components/CorporateInformationPage';

const dataProtectionEmail = 'dataprotection@jagroupservices.co.uk';

const sections = [
  {
    eyebrow: 'Your information rights',
    title: 'Request action concerning your personal data',
    description:
      'The availability and extent of each right depends on the circumstances and lawful basis for processing. Rights are not always absolute, but every valid request will be considered under applicable data protection law.',
    columns: 3 as const,
    cards: [
      {
        icon: FileUser,
        title: 'Access your information',
        description:
          'Ask whether we process your personal data and request a copy of relevant information together with the supplementary information required by law.',
        href: `mailto:${dataProtectionEmail}?subject=Data%20protection%20request%20-%20access`,
        linkLabel: 'Make an access request',
      },
      {
        icon: UserCheck,
        title: 'Correct inaccurate data',
        description:
          'Ask us to correct personal data that is inaccurate or complete information that is materially incomplete.',
        href: `mailto:${dataProtectionEmail}?subject=Data%20protection%20request%20-%20rectification`,
        linkLabel: 'Request a correction',
      },
      {
        icon: Trash2,
        title: 'Request erasure',
        description:
          'Ask us to erase personal data where the legal conditions apply. We may need to retain information for legal, regulatory, security or dispute-related reasons.',
        href: `mailto:${dataProtectionEmail}?subject=Data%20protection%20request%20-%20erasure`,
        linkLabel: 'Request erasure',
      },
      {
        icon: FileLock2,
        title: 'Restrict processing',
        description:
          'Ask us to limit the use of personal data in specified circumstances, for example while accuracy or an objection is being considered.',
        href: `mailto:${dataProtectionEmail}?subject=Data%20protection%20request%20-%20restriction`,
        linkLabel: 'Request restriction',
      },
      {
        icon: RefreshCcw,
        title: 'Data portability',
        description:
          'Request eligible personal data in a structured, commonly used and machine-readable format where the statutory conditions are met.',
        href: `mailto:${dataProtectionEmail}?subject=Data%20protection%20request%20-%20portability`,
        linkLabel: 'Request portability',
      },
      {
        icon: Hand,
        title: 'Object to processing',
        description:
          'Object to certain processing based on legitimate interests or public-task grounds, and object at any time to the use of personal data for direct marketing.',
        href: `mailto:${dataProtectionEmail}?subject=Data%20protection%20request%20-%20objection`,
        linkLabel: 'Raise an objection',
      },
      {
        icon: BadgeCheck,
        title: 'Withdraw consent',
        description:
          'Where processing relies on consent, you may withdraw that consent for future processing without affecting activity that was lawful before withdrawal.',
        href: `mailto:${dataProtectionEmail}?subject=Data%20protection%20request%20-%20withdraw%20consent`,
        linkLabel: 'Withdraw consent',
      },
      {
        icon: UserRoundCog,
        title: 'Automated decisions and profiling',
        description:
          'Ask about relevant solely automated decisions or profiling and request appropriate human involvement where the applicable legal right arises.',
        href: `mailto:${dataProtectionEmail}?subject=Data%20protection%20request%20-%20automated%20decision`,
        linkLabel: 'Ask for a review',
      },
      {
        icon: DatabaseZap,
        title: 'Report a suspected data incident',
        description:
          'Tell the Data Protection Officer promptly if personal information connected with one of our services appears to have been lost, disclosed, altered or accessed improperly.',
        href: `mailto:${dataProtectionEmail}?subject=Urgent%20-%20suspected%20personal%20data%20incident`,
        linkLabel: 'Report a data incident',
      },
    ],
  },
  {
    eyebrow: 'Making a request',
    title: 'Information that helps us respond securely',
    description:
      'You do not need to use legal terminology. Explain what you want us to do and provide enough detail for us to identify the relevant service and information.',
    columns: 2 as const,
    cards: [
      {
        icon: FileCheck2,
        title: 'Identify the service and request',
        description:
          'State which JA Group Services platform, account, transaction or communication is involved and describe the information or processing concerned.',
        items: [
          'Your name and preferred contact details',
          'The relevant platform, account or customer reference',
          'The right or action you wish to exercise',
          'A useful date range or description of the records',
        ],
      },
      {
        icon: Fingerprint,
        title: 'Identity and authority checks',
        description:
          'We may request proportionate evidence of identity or authority before disclosing information or making account-level changes, particularly where the request involves sensitive records or another person.',
      },
      {
        icon: LockKeyhole,
        title: 'Minimise sensitive information',
        description:
          'Do not send passwords, authentication codes, full payment-card numbers or excessive identity documents unless we have specifically explained a secure and necessary process.',
      },
      {
        icon: ShieldQuestion,
        title: 'Timing and clarification',
        description:
          'We will respond within the applicable statutory timeframe, normally one calendar month for individual-rights requests. We may seek clarification or extend time where the law permits and the request is complex.',
      },
    ],
  },
  {
    eyebrow: 'Data protection governance',
    title: 'Who handles privacy matters',
    description:
      'JA Group Services Ltd maintains central data protection oversight for personal data for which it acts as controller, while individual services and providers may have separate responsibilities described in their notices.',
    columns: 2 as const,
    cards: [
      {
        icon: ShieldCheck,
        title: 'Data Protection Officer',
        description:
          'Mr Alfie Thomas Holywood Murray serves as Director of Data Protection and Data Protection Officer for JA Group Services Ltd.',
        items: [`Email: ${dataProtectionEmail}`, 'ICO registration: ZB877370', 'Registered company: JA Group Services Ltd'],
        href: `mailto:${dataProtectionEmail}?subject=Data%20protection%20enquiry`,
        linkLabel: 'Contact the Data Protection Officer',
      },
      {
        icon: FileLock2,
        title: 'Privacy Policy',
        description:
          'The full Privacy Policy explains the categories of personal data processed, purposes, lawful bases, sharing, retention, international transfers and complaint rights in greater detail.',
        href: '/privacy-policy',
        linkLabel: 'Read the Privacy Policy',
      },
      {
        icon: Mail,
        title: 'General privacy enquiry',
        description:
          'For a general question that is not a formal rights request, contact the Data Protection Officer and identify the relevant service or processing activity.',
        href: `mailto:${dataProtectionEmail}?subject=General%20privacy%20enquiry`,
        linkLabel: 'Send a privacy enquiry',
      },
      {
        icon: ShieldQuestion,
        title: 'External complaint route',
        description:
          'You may raise a concern with the Information Commissioner’s Office. We encourage you to contact us first so that we have an opportunity to investigate and respond.',
        href: 'https://ico.org.uk/make-a-complaint/',
        linkLabel: 'Visit the ICO complaint service',
        external: true,
      },
    ],
  },
] as const;

export default function PrivacyCentrePage() {
  return (
    <CorporateInformationPage
      title="Privacy Centre"
      pageTitle="Privacy Centre | JA Group Services Ltd"
      description="Exercise your personal data rights, contact the Data Protection Officer and report privacy concerns through the JA Group Services Ltd Privacy Centre."
      canonicalPath="/privacy-centre"
      badge="Privacy and Data Rights"
      heroIcon={ShieldCheck}
      introduction="The Privacy Centre provides a clear route to exercise information rights, ask questions about personal data and contact the Data Protection Officer for JA Group Services Ltd."
      notice={{
        icon: ShieldCheck,
        title: 'The Privacy Centre works alongside the full Privacy Policy',
        description:
          'This page provides practical request routes and does not replace the detailed information in our Privacy Policy or alter the legal conditions and exemptions that apply to individual rights.',
      }}
      sections={sections}
      closingTitle="Contact the Data Protection Officer"
      closingDescription="Explain the service involved and the action you are asking us to take. We will identify the appropriate data protection process and any verification needed."
      actions={[
        { label: 'Email the Data Protection Officer', href: `mailto:${dataProtectionEmail}?subject=Data%20protection%20enquiry` },
        { label: 'Read the Privacy Policy', href: '/privacy-policy', variant: 'outline' },
      ]}
    />
  );
}
