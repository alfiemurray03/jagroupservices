import {
  Accessibility,
  CalendarCheck2,
  Contrast,
  FileWarning,
  Keyboard,
  Mail,
  MonitorSmartphone,
  ScanSearch,
  Speech,
  TextCursorInput,
  ZoomIn,
} from 'lucide-react';

import CorporateInformationPage from '@/components/CorporateInformationPage';

const sections = [
  {
    eyebrow: 'Using this website',
    title: 'Our accessibility objectives',
    description:
      'We want people to be able to understand, navigate and interact with this website using the browser, device settings and assistive technology that work for them.',
    columns: 3 as const,
    cards: [
      {
        icon: Keyboard,
        title: 'Keyboard navigation',
        description:
          'The website is designed so that core navigation, links, buttons and forms can be reached and operated without relying on a mouse.',
      },
      {
        icon: ZoomIn,
        title: 'Zoom and responsive layout',
        description:
          'Content is designed to reflow across different screen sizes and to remain usable when browser zoom or text scaling is increased.',
      },
      {
        icon: Speech,
        title: 'Assistive technology',
        description:
          'We use semantic headings, labels and accessible names intended to support screen readers, speech tools and other assistive technology.',
      },
      {
        icon: Contrast,
        title: 'Colour and contrast',
        description:
          'Light and dark themes are available, and colour is not intended to be the only way that essential information or status is communicated.',
      },
      {
        icon: TextCursorInput,
        title: 'Clear content',
        description:
          'We aim to use meaningful headings, descriptive links, concise instructions and plain language wherever the subject permits.',
      },
      {
        icon: MonitorSmartphone,
        title: 'Different devices',
        description:
          'The public website is designed for modern desktop, tablet and mobile browsers and is reviewed as layouts and features change.',
      },
    ],
  },
  {
    eyebrow: 'Compliance status',
    title: 'Our current position',
    description:
      'JA Group Services Ltd aims to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA where reasonably practicable. The website has not yet undergone a comprehensive independent accessibility audit, so we do not claim full compliance.',
    columns: 2 as const,
    cards: [
      {
        icon: ScanSearch,
        title: 'Testing approach',
        description:
          'Accessibility is considered during development through responsive testing, keyboard checks, semantic review and examination of common interactive journeys. Formal independent testing is planned as the website and services mature.',
        items: [
          'Representative public pages and navigation journeys',
          'Keyboard focus and interactive controls',
          'Responsive layouts and text scaling',
          'Labels, headings and meaningful link text',
        ],
      },
      {
        icon: FileWarning,
        title: 'Known and potential limitations',
        description:
          'Some areas may depend on third-party widgets, embedded services or externally produced content that JA Group Services Ltd cannot fully control.',
        items: [
          'Third-party widgets may have their own accessibility limitations',
          'Older or externally supplied documents may require remediation',
          'Complex interactive features may need further assistive-technology testing',
          'Individual browser and assistive-technology combinations may behave differently',
        ],
      },
    ],
  },
  {
    eyebrow: 'Feedback and alternatives',
    title: 'Tell us when something is difficult to use',
    description:
      'Accessibility improves when users can report real barriers. We will review feedback, consider reasonable adjustments and provide information in another suitable format where reasonably possible.',
    columns: 2 as const,
    cards: [
      {
        icon: Mail,
        title: 'Report an accessibility problem',
        description:
          'Explain the page or feature involved, what you were trying to do, the device or assistive technology used and the barrier you encountered.',
        href: 'mailto:contact@jagroupservices.co.uk?subject=Website%20accessibility%20feedback',
        linkLabel: 'Email accessibility feedback',
      },
      {
        icon: Accessibility,
        title: 'Request an alternative format',
        description:
          'Contact us if you need website information in a different format or require another reasonable adjustment to access one of our services.',
        href: '/contactus',
        linkLabel: 'Request accessibility assistance',
      },
      {
        icon: CalendarCheck2,
        title: 'Statement preparation and review',
        description:
          'This statement was prepared on 3 August 2026. It will be reviewed when material changes are made and, in any event, no later than 3 August 2027.',
      },
      {
        icon: ScanSearch,
        title: 'Continuous improvement',
        description:
          'New public features should be designed with accessibility in mind, and material barriers identified through testing or user feedback will be prioritised according to impact and practicality.',
      },
    ],
  },
] as const;

export default function AccessibilityStatementPage() {
  return (
    <CorporateInformationPage
      title="Accessibility Statement"
      pageTitle="Accessibility Statement | JA Group Services Ltd"
      description="Read the JA Group Services Ltd accessibility statement, current accessibility objectives, known limitations and feedback routes."
      canonicalPath="/accessibility-statement"
      badge="Inclusive Digital Access"
      heroIcon={Accessibility}
      introduction="JA Group Services Ltd wants its websites and digital services to be usable by as many people as reasonably possible, including people who use assistive technology or require reasonable adjustments."
      notice={{
        icon: Accessibility,
        title: 'We do not claim that every part of the website is fully accessible',
        description:
          'The website is under continuing development and has not yet completed a comprehensive independent accessibility audit. This statement is intended to be transparent about our objectives, current testing and known areas for further review.',
      }}
      sections={sections}
      closingTitle="Accessibility feedback is welcome"
      closingDescription="A brief description of the barrier, page and technology used can help us understand the issue and identify the most effective adjustment."
      actions={[
        { label: 'Report an accessibility issue', href: 'mailto:contact@jagroupservices.co.uk?subject=Website%20accessibility%20feedback' },
        { label: 'Contact Us', href: '/contactus', variant: 'outline' },
      ]}
    />
  );
}
