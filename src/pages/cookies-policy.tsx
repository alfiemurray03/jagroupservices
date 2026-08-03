import {
  BarChart3,
  Browser,
  CalendarClock,
  Cookie,
  ExternalLink,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
} from 'lucide-react';

import CorporateInformationPage from '@/components/CorporateInformationPage';

const sections = [
  {
    eyebrow: 'Cookie categories',
    title: 'Technologies used on this website',
    description:
      'We separate essential website functions from optional functional and analytics services. Optional categories remain disabled unless the visitor makes a clear choice to enable them.',
    columns: 3 as const,
    cards: [
      {
        icon: ShieldCheck,
        title: 'Strictly necessary',
        description:
          'Required for core website operation and cannot be switched off through our consent controls.',
        items: [
          'Storing cookie consent choices',
          'Remembering light, dark or system appearance preferences',
          'Security, load management and essential service operation',
          'Basic accessibility and navigation functionality',
        ],
      },
      {
        icon: Settings2,
        title: 'Functional',
        description:
          'Optional services that add third-party functionality to the website. These are loaded only after functional consent.',
        items: [
          'Trustpilot review widget in the website footer',
          'Trustpilot invitation functionality where applicable',
          'Associated storage or access technologies used by that provider',
        ],
      },
      {
        icon: BarChart3,
        title: 'Analytics',
        description:
          'Optional measurement tools used to understand website visits and interactions. These are loaded only after analytics consent.',
        items: [
          'Google Analytics property G-79FS3MK55Y',
          'Page-view and interaction measurement',
          'First-party website usage events used to improve journeys',
          'Aggregated performance and usage analysis',
        ],
      },
    ],
  },
  {
    eyebrow: 'Your choices',
    title: 'How consent is obtained and managed',
    description:
      'Consent must be a positive choice. Optional technologies are not activated merely because somebody continues browsing the website.',
    columns: 2 as const,
    cards: [
      {
        icon: SlidersHorizontal,
        title: 'First visit',
        description:
          'The consent banner allows visitors to accept all optional categories, decline optional categories or open detailed settings before optional services are loaded.',
      },
      {
        icon: Settings2,
        title: 'Granular settings',
        description:
          'Functional and analytics choices can be enabled or disabled separately through Cookie Settings in the website footer.',
      },
      {
        icon: CalendarClock,
        title: 'Consent record',
        description:
          'The website stores the selected categories and the date of the choice for up to 12 months, after which a fresh choice may be requested.',
      },
      {
        icon: Browser,
        title: 'Browser controls',
        description:
          'Visitors can also delete or block cookies through browser settings. Blocking essential storage may affect preferences or parts of the website experience.',
      },
    ],
  },
  {
    eyebrow: 'Third-party services',
    title: 'Providers that may set or access information',
    description:
      'Third-party services operate under their own privacy and cookie information. Their exact cookie names and durations may change as provider technology is updated.',
    columns: 2 as const,
    cards: [
      {
        icon: BarChart3,
        title: 'Google Analytics',
        description:
          'Google Analytics is used only after analytics consent to measure visits and interactions. We configure the service with IP anonymisation enabled.',
        href: 'https://policies.google.com/technologies/cookies',
        linkLabel: 'Read Google’s cookie information',
        external: true,
      },
      {
        icon: ExternalLink,
        title: 'Trustpilot',
        description:
          'The Trustpilot footer widget and related optional functionality are loaded only after functional consent.',
        href: 'https://legal.trustpilot.com/for-reviewers/end-user-privacy-terms',
        linkLabel: 'Read Trustpilot’s privacy information',
        external: true,
      },
      {
        icon: ShieldCheck,
        title: 'Hosting and security records',
        description:
          'Cloudflare and other infrastructure providers may process technical request, security and diagnostic information needed to deliver and protect the website. Some strictly necessary technologies may apply without optional consent.',
      },
      {
        icon: Cookie,
        title: 'Changes to technology use',
        description:
          'We will review this policy and consent controls when providers or purposes change materially. Fresh consent may be requested where the change affects an existing choice.',
      },
    ],
  },
] as const;

export default function CookiesPolicyPage() {
  return (
    <CorporateInformationPage
      title="Cookies Policy"
      pageTitle="Cookies Policy | JA Group Services Ltd"
      description="Learn how JA Group Services Ltd uses essential, functional and analytics cookies and how to manage your choices."
      canonicalPath="/cookies-policy"
      badge="Cookie and Technology Information"
      heroIcon={Cookie}
      introduction="This policy explains the cookies and similar storage or access technologies used on the JA Group Services Ltd website, why they are used and how visitors can control optional categories. Last updated: 3 August 2026."
      notice={{
        icon: ShieldCheck,
        title: 'Optional technologies are disabled by default',
        description:
          'Google Analytics and Trustpilot are not loaded until the visitor enables the relevant analytics or functional category. Continuing to browse does not by itself provide consent.',
      }}
      sections={sections}
      closingTitle="Review or change your cookie choices"
      closingDescription="Open Cookie Settings from the footer at any time to enable or disable functional and analytics services. Changes take effect after the website reloads."
      actions={[
        { label: 'Open the Privacy Centre', href: '/privacy-centre' },
        { label: 'Read the Privacy Policy', href: '/privacy-policy', variant: 'outline' },
      ]}
    />
  );
}
