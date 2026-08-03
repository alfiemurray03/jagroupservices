import {
  AlertTriangle,
  Ban,
  Bug,
  CheckCircle2,
  FileKey2,
  FileSearch,
  KeyRound,
  LockKeyhole,
  MailWarning,
  Network,
  Radar,
  ShieldAlert,
  ShieldCheck,
  Siren,
} from 'lucide-react';

import CorporateInformationPage from '@/components/CorporateInformationPage';

const sections = [
  {
    eyebrow: 'Responsible disclosure',
    title: 'How to report a suspected vulnerability',
    description:
      'We welcome responsible reports that help us identify and address security weaknesses in systems owned or controlled by JA Group Services Ltd.',
    columns: 2 as const,
    cards: [
      {
        icon: MailWarning,
        title: 'Send a clear report',
        description:
          'Email contact@jagroupservices.co.uk with the subject “Security vulnerability report”. Include enough information for us to understand and reproduce the issue without including unnecessary personal data.',
        items: [
          'The affected website, service, URL or feature',
          'A clear description of the suspected weakness',
          'Safe steps to reproduce the issue',
          'Potential impact and any evidence available',
          'Your preferred contact details',
        ],
        href: 'mailto:contact@jagroupservices.co.uk?subject=Security%20vulnerability%20report',
        linkLabel: 'Email a vulnerability report',
      },
      {
        icon: FileSearch,
        title: 'What happens next',
        description:
          'We will route the report to the appropriate technical or operational owner, assess whether the issue is valid and determine the proportionate response.',
        items: [
          'We may ask for additional technical detail',
          'Third-party systems may need to be referred to the relevant provider',
          'Updates depend on severity, ownership and remediation complexity',
          'We may close reports that are not reproducible or are outside scope',
        ],
      },
    ],
  },
  {
    eyebrow: 'Permitted research',
    title: 'Rules for safe and responsible testing',
    description:
      'This policy does not grant permission to access data, disrupt services or test third-party systems. Research must remain proportionate and minimise risk to customers and services.',
    columns: 3 as const,
    cards: [
      {
        icon: CheckCircle2,
        title: 'Act in good faith',
        description:
          'Limit activity to what is reasonably necessary to demonstrate the issue and stop immediately if customer data, sensitive information or service instability is encountered.',
      },
      {
        icon: LockKeyhole,
        title: 'Protect information',
        description:
          'Do not download, retain, alter, destroy, disclose or exploit personal data, credentials, confidential information or intellectual property.',
      },
      {
        icon: Radar,
        title: 'Use minimal testing',
        description:
          'Use the lowest-impact method available. Do not automate high-volume testing, bypass rate limits or create avoidable operational load.',
      },
      {
        icon: Ban,
        title: 'No disruption or coercion',
        description:
          'Denial-of-service activity, extortion, threats, ransom demands and attempts to impair availability are prohibited.',
      },
      {
        icon: KeyRound,
        title: 'No social engineering',
        description:
          'Do not target customers, staff, suppliers or partners through phishing, impersonation, credential theft, bribery or physical intrusion.',
      },
      {
        icon: ShieldAlert,
        title: 'Do not disclose prematurely',
        description:
          'Do not publish or share vulnerability details before JA Group Services Ltd and any affected provider have had a reasonable opportunity to investigate and respond.',
      },
    ],
  },
  {
    eyebrow: 'Scope',
    title: 'Systems covered by this policy',
    description:
      'Scope depends on ownership and control. A JA Group Services brand or link does not necessarily mean that every underlying third-party component is authorised for testing.',
    columns: 2 as const,
    cards: [
      {
        icon: Network,
        title: 'Normally in scope',
        description:
          'Publicly accessible websites and web applications directly owned or controlled by JA Group Services Ltd, including their normal unauthenticated and authorised-account functions.',
        items: [
          'jagroupservices.co.uk and directly controlled subdomains',
          'Public JA Group Services applications where testing can be conducted safely',
          'Company-operated API endpoints expressly exposed for normal service use',
        ],
      },
      {
        icon: AlertTriangle,
        title: 'Outside scope or prohibited',
        description:
          'Third-party infrastructure and activity that creates risk to customers, staff, providers or service availability is not authorised.',
        items: [
          'Stripe, Microsoft, Cloudflare, Atlassian, GoDaddy and other provider systems',
          'Customer-owned domains, websites or accounts',
          'Physical security, social engineering and employee devices',
          'Denial-of-service, brute-force and high-volume scanning',
          'Accessing or modifying data belonging to another person',
        ],
      },
      {
        icon: FileKey2,
        title: 'security.txt',
        description:
          'A machine-readable security contact is published at /.well-known/security.txt to help security researchers find the reporting route and policy.',
        href: '/.well-known/security.txt',
        linkLabel: 'View security.txt',
        external: true,
      },
      {
        icon: Siren,
        title: 'Active incidents and account compromise',
        description:
          'This page is for vulnerability disclosure. Customers who believe an account has been compromised or a live service incident is occurring should use the Customer Support Centre promptly.',
        href: '/customer-support',
        linkLabel: 'Open Customer Support',
      },
    ],
  },
] as const;

export default function SecurityPage() {
  return (
    <CorporateInformationPage
      title="Security and Vulnerability Disclosure"
      pageTitle="Security and Vulnerability Disclosure | JA Group Services Ltd"
      description="Report suspected security vulnerabilities to JA Group Services Ltd and read the responsible disclosure scope, rules and reporting process."
      canonicalPath="/security"
      badge="Responsible Security Reporting"
      heroIcon={ShieldCheck}
      introduction="Security researchers, customers and members of the public can use this page to report suspected vulnerabilities affecting systems owned or controlled by JA Group Services Ltd."
      notice={{
        icon: Bug,
        title: 'This is not permission for unrestricted security testing',
        description:
          'Only low-impact, good-faith activity necessary to identify and report a suspected vulnerability is contemplated. You must not access other people’s information, disrupt a service or test systems belonging to a third-party provider.',
        tone: 'warning',
      }}
      sections={sections}
      closingTitle="Report security issues privately"
      closingDescription="Provide a concise technical report and avoid sharing vulnerability details publicly while the matter is being assessed."
      actions={[
        { label: 'Email a security report', href: 'mailto:contact@jagroupservices.co.uk?subject=Security%20vulnerability%20report' },
        { label: 'Customer Support Centre', href: '/customer-support', variant: 'outline' },
      ]}
    />
  );
}
