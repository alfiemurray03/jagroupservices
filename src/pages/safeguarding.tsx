import {
  AlertTriangle,
  ClipboardCheck,
  Eye,
  FileLock2,
  HeartHandshake,
  LifeBuoy,
  MailWarning,
  MessageCircleWarning,
  PhoneCall,
  Scale,
  ShieldCheck,
  Siren,
  UserRoundCheck,
  UsersRound,
} from 'lucide-react';

import CorporateInformationPage from '@/components/CorporateInformationPage';

const sections = [
  {
    eyebrow: 'Reporting a concern',
    title: 'Use the route that matches the level of risk',
    description:
      'JA Group Services Ltd can review safeguarding concerns connected with its own services, staff, contractors or customer interactions. Emergency and statutory safeguarding responses must still be directed to the appropriate public authority.',
    columns: 2 as const,
    cards: [
      {
        icon: Siren,
        title: 'Immediate danger or crime in progress',
        description:
          'Call 999 where a child, young person or adult is in immediate danger, a serious crime is in progress or urgent emergency assistance is required.',
        href: 'tel:999',
        linkLabel: 'Call 999',
      },
      {
        icon: PhoneCall,
        title: 'Police non-emergency concerns',
        description:
          'Call 101 or use the relevant police reporting service where a crime or safety concern is not an immediate emergency.',
        href: 'tel:101',
        linkLabel: 'Call 101',
      },
      {
        icon: UsersRound,
        title: 'Local authority safeguarding',
        description:
          'Concerns that a child or adult may be at risk of abuse or neglect should be reported to the safeguarding or social care team at the person’s local council.',
        href: 'https://www.gov.uk/report-child-abuse',
        linkLabel: 'Find child safeguarding guidance',
        external: true,
      },
      {
        icon: MailWarning,
        title: 'Concern connected with JA Group Services',
        description:
          'Email the Designated Safeguarding Officer where a concern relates to one of our services, communications, representatives or operational activities.',
        items: [
          'Explain who may be at risk and why',
          'State whether emergency services or a local authority have been contacted',
          'Provide relevant dates, service details and evidence',
          'Do not investigate the matter yourself',
        ],
        href: 'mailto:alfie@jagroupservices.co.uk?subject=Safeguarding%20concern',
        linkLabel: 'Email the Designated Safeguarding Officer',
      },
    ],
  },
  {
    eyebrow: 'Our safeguarding approach',
    title: 'Principles applied when a concern is received',
    description:
      'Safeguarding decisions are made according to the information available, the level of risk, the Company’s role and the need to involve an appropriate statutory or specialist service.',
    columns: 3 as const,
    cards: [
      {
        icon: Eye,
        title: 'Take concerns seriously',
        description:
          'A person does not need proof before raising a genuine concern. Reports should be listened to, recorded and assessed without dismissing warning signs.',
      },
      {
        icon: ShieldCheck,
        title: 'Prioritise safety',
        description:
          'Immediate safety takes priority over internal processes. Where urgent harm is suspected, emergency or statutory services should be contacted without delay.',
      },
      {
        icon: FileLock2,
        title: 'Share information carefully',
        description:
          'Safeguarding information is handled on a need-to-know basis, but confidentiality cannot be promised where disclosure may be necessary to protect someone or comply with law.',
      },
      {
        icon: Scale,
        title: 'Act proportionately',
        description:
          'The response should reflect the nature, credibility and urgency of the concern and the Company’s actual role in the relevant service or interaction.',
      },
      {
        icon: ClipboardCheck,
        title: 'Record decisions',
        description:
          'Material reports, actions, referrals and reasons should be recorded so that the handling of the concern can be reviewed and accounted for.',
      },
      {
        icon: HeartHandshake,
        title: 'Treat people with dignity',
        description:
          'People raising or affected by concerns should be treated respectfully, without discrimination and with appropriate sensitivity to communication or accessibility needs.',
      },
    ],
  },
  {
    eyebrow: 'What happens next',
    title: 'How JA Group Services may respond',
    description:
      'The Company is not a police force, social care authority or emergency service. Our role is to secure our own services, take appropriate internal action and make or support referrals where necessary.',
    columns: 2 as const,
    cards: [
      {
        icon: UserRoundCheck,
        title: 'Designated Safeguarding Officer review',
        description:
          'Mr Alfie Thomas Holywood Murray is the Designated Safeguarding Officer. He assesses concerns received by the Company and determines the appropriate internal action or escalation route.',
      },
      {
        icon: MessageCircleWarning,
        title: 'Clarification and preservation',
        description:
          'We may seek limited clarification, preserve relevant account or communication records and take proportionate steps to prevent further risk within systems we control.',
      },
      {
        icon: LifeBuoy,
        title: 'Referral and cooperation',
        description:
          'Where appropriate, information may be referred to the police, a local authority, a service provider or another competent organisation, subject to applicable law and safeguarding necessity.',
      },
      {
        icon: AlertTriangle,
        title: 'Limits on updates',
        description:
          'We may be unable to provide detailed outcomes where doing so would reveal another person’s information, prejudice an investigation or breach legal or safeguarding obligations.',
      },
    ],
  },
] as const;

export default function SafeguardingPage() {
  return (
    <CorporateInformationPage
      title="Safeguarding and Trust"
      pageTitle="Safeguarding and Trust | JA Group Services Ltd"
      description="Report safeguarding concerns connected with JA Group Services Ltd and understand the Company’s safeguarding principles, escalation routes and limitations."
      canonicalPath="/safeguarding"
      badge="Safety, Welfare and Trust"
      heroIcon={ShieldCheck}
      introduction="We are committed to acting responsibly where information suggests that a child, young person or adult may be at risk in connection with a JA Group Services service, communication or operational activity."
      notice={{
        icon: Siren,
        title: 'Do not use this website as an emergency service',
        description:
          'Call 999 if somebody is in immediate danger or a serious crime is in progress. For a non-emergency police matter call 101, and report child or adult safeguarding concerns to the relevant local authority where appropriate.',
        tone: 'warning',
      }}
      sections={sections}
      closingTitle="Raise concerns promptly and responsibly"
      closingDescription="Share the relevant facts, avoid conducting your own investigation and use emergency or statutory services whenever the level of risk requires them."
      actions={[
        { label: 'Email the Safeguarding Officer', href: 'mailto:alfie@jagroupservices.co.uk?subject=Safeguarding%20concern' },
        { label: 'Customer Support Centre', href: '/customer-support', variant: 'outline' },
      ]}
    />
  );
}
