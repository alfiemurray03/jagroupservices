import {
  BadgeCheck,
  BookOpenCheck,
  Building2,
  ClipboardCheck,
  FileCheck2,
  Gavel,
  Landmark,
  Network,
  Scale,
  ShieldCheck,
  UsersRound,
  Workflow,
} from 'lucide-react';

import CorporateInformationPage from '@/components/CorporateInformationPage';

const sections = [
  {
    eyebrow: 'Corporate identity',
    title: 'The legal and group structure',
    description:
      'The Company operates within a defined group and governance structure. Public descriptions distinguish the legal entity, parent company, corporate director, Board leadership and day-to-day executive management.',
    columns: 2 as const,
    cards: [
      {
        icon: Building2,
        title: 'JA Group Services Ltd',
        description:
          'The operating company responsible for its own contracts, websites, platforms, customer services, regulatory duties and central support arrangements.',
        items: [
          'Company number: 16314179',
          'Registered in England and Wales',
          'Registered office: 167-169 Great Portland Street, 5th Floor, London, W1W 5PF',
          'ICO registration: ZB877370',
        ],
      },
      {
        icon: Landmark,
        title: 'JSDS Group Ltd',
        description:
          'The parent company, majority shareholder and corporate director of JA Group Services Ltd. It provides group-level direction and holds the Company’s intellectual property under the group arrangements.',
      },
      {
        icon: UsersRound,
        title: 'Corporate Director representation',
        description:
          'Mr Jack Nicolau Sousa Da Silva represents JSDS Group Ltd in its capacity as corporate director and serves as Chairman to the Board of Directors and Shareholders at JA Group Services Ltd.',
        href: '/team/jack-nicolau-sousa-da-silva',
        linkLabel: 'View Jack’s leadership profile',
      },
      {
        icon: BadgeCheck,
        title: 'Executive management',
        description:
          'Mr Alfie Thomas Holywood Murray serves as Company Director and Chief Executive Officer, with responsibility for day-to-day leadership and delegated operational management. He also serves as Director of Data Protection and Data Protection Officer.',
        href: '/team/alfie-thomas-holywood-murray',
        linkLabel: 'View Alfie’s leadership profile',
      },
    ],
  },
  {
    eyebrow: 'Decision-making',
    title: 'How authority and accountability are separated',
    description:
      'Governance is intended to provide effective day-to-day management while preserving Board and shareholder oversight for matters that require collective or reserved authority.',
    columns: 3 as const,
    cards: [
      {
        icon: Gavel,
        title: 'Board and shareholder oversight',
        description:
          'The Board and shareholders consider matters requiring formal approval, including major strategic decisions, structural changes and reserved governance matters.',
      },
      {
        icon: Workflow,
        title: 'Delegated executive authority',
        description:
          'The Chief Executive Officer manages ordinary operations within delegated authority, implements agreed strategy and escalates material risks or reserved matters.',
      },
      {
        icon: Scale,
        title: 'Conflicts and independence',
        description:
          'Material interests, related-party matters and conflicts should be identified, recorded and managed through the appropriate governance process.',
      },
      {
        icon: ClipboardCheck,
        title: 'Recorded decisions',
        description:
          'Board decisions, written resolutions, approvals and significant delegated actions are documented and retained within the Company’s governance records.',
      },
      {
        icon: ShieldCheck,
        title: 'Data protection oversight',
        description:
          'The Data Protection Officer provides oversight of privacy governance, rights handling, accountability and escalation of material personal-data risks.',
      },
      {
        icon: Network,
        title: 'Operating services and divisions',
        description:
          'Platforms and trading divisions remain connected to the operating company through clear responsibility for customer service, contracts, policies and central controls.',
        href: '/about-our-divisions',
        linkLabel: 'Explore our divisions and platforms',
      },
    ],
  },
  {
    eyebrow: 'Corporate accountability',
    title: 'Public information and formal records',
    description:
      'This website provides a practical overview. Statutory registers, Companies House filings, executed agreements and formal Company records remain the authoritative source where greater legal detail is required.',
    columns: 2 as const,
    cards: [
      {
        icon: FileCheck2,
        title: 'Statutory filings',
        description:
          'Company status, officers, registered office information, accounts and confirmation statements are filed through the applicable Companies House processes.',
        href: 'https://find-and-update.company-information.service.gov.uk/company/16314179',
        linkLabel: 'View the Companies House record',
        external: true,
      },
      {
        icon: BookOpenCheck,
        title: 'Policies and operating frameworks',
        description:
          'Published policies explain customer, privacy, complaints, security, accessibility and safeguarding arrangements. Internal frameworks support delegated authority and operational control.',
        href: '/sitemap',
        linkLabel: 'Browse the website sitemap',
      },
      {
        icon: ShieldCheck,
        title: 'Regulatory registration',
        description:
          'JA Group Services Ltd is registered with the Information Commissioner’s Office under registration number ZB877370.',
        href: 'https://ico.org.uk/ESDWebPages/Entry/ZB877370',
        linkLabel: 'View the ICO register entry',
        external: true,
      },
      {
        icon: Scale,
        title: 'Interpretation of this page',
        description:
          'This page is a public corporate summary. It does not amend the Company’s articles, shareholder arrangements, Board resolutions, delegated authorities or statutory records.',
      },
    ],
  },
] as const;

export default function GovernancePage() {
  return (
    <CorporateInformationPage
      title="Governance and Corporate Information"
      pageTitle="Governance and Corporate Information | JA Group Services Ltd"
      description="Understand the ownership, corporate directorship, Board oversight, executive management and accountability structure of JA Group Services Ltd."
      canonicalPath="/governance"
      badge="Corporate Governance"
      heroIcon={Scale}
      introduction="JA Group Services Ltd operates through a structured relationship between its parent company, corporate director, Board and executive management. This page explains the public-facing governance model and where responsibilities sit."
      notice={{
        icon: FileCheck2,
        title: 'Public summary, not a replacement for formal records',
        description:
          'The Company’s statutory filings, articles, resolutions, registers, agreements and approved governance frameworks remain authoritative where they contain more detailed or legally operative information.',
      }}
      sections={sections}
      closingTitle="Clear governance supports reliable services"
      closingDescription="Customers, partners and stakeholders should be able to understand which entity operates a service, who provides oversight and where formal accountability sits."
      actions={[
        { label: 'Meet the leadership team', href: '/meet-the-team' },
        { label: 'View our group structure', href: '/our-group-structure', variant: 'outline' },
      ]}
    />
  );
}
