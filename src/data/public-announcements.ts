export interface PublicAnnouncement {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  authorName: string;
  status: 'published';
  isFeatured: boolean;
  seoTitle: string | null;
  seoDescription: string | null;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Approved published corporate content used when the editable announcements
 * database is temporarily unavailable or has not yet been provisioned.
 * Database announcements remain the primary source whenever available.
 */
export const PUBLIC_ANNOUNCEMENT_FALLBACKS: readonly PublicAnnouncement[] = [
  {
    id: -1,
    title: 'JA Group Services Ltd expands its corporate website and stakeholder information services',
    slug: 'sousa-murray-website-structure-confirmed',
    summary:
      'JA Group Services Ltd has introduced an expanded corporate website designed to provide clearer access to company information, customer support, brand services and stakeholder resources.',
    content: `## A clearer corporate information point

JA Group Services Ltd has expanded its corporate website to provide a more complete and accessible information point for customers, suppliers, commercial partners, shareholders, professional advisers and other stakeholders.

The website brings together information about the Company, its governance, the Sousa Murray brand family, customer-support arrangements, legal policies and official corporate announcements. It is intended to make it easier for visitors to identify the correct service, understand who is responsible for it and find the appropriate contact route.

## Access to Sousa Murray services

JA Group Services Ltd operates customer-facing services under the Sousa Murray master brand. The corporate website provides direct access to the approved service websites and explains the relationship between each brand and the legal operating company.

The current service structure includes:

- **Sousa Murray Domains**, providing domain, hosting and related digital services;
- **Sousa Murray Sites**, the Managed Website Services area within Sousa Murray Domains;
- **Sousa Murray Planeia**, providing planning and collaboration tools;
- **Sousa Murray Profiles**, providing digital profile and contact-sharing tools; and
- **Sousa Murray eLearning**, providing authorised e-learning reseller and learner-administration services.

JA Group Services Ltd remains the legal operating company behind these services unless a service-specific notice explains the role of an authorised third-party provider.

## Better routes for customers and stakeholders

The expanded website includes dedicated information for:

- customers seeking account, billing, learner or service support;
- suppliers and professional service providers wishing to introduce relevant capabilities;
- commercial partners and organisations interested in working with the Company;
- existing shareholders and their authorised representatives;
- people interested in future careers or the planned Affiliate Partner Programme; and
- media, advisers and other stakeholders seeking verified corporate information.

The Contact Us page has also been developed into a structured corporate directory so that enquiries can be routed to the correct office or support process.

## Transparency, governance and trust

The corporate website now brings together the Company’s registered details, governance information, privacy and data-protection information, security reporting arrangements, safeguarding information, accessibility commitments, complaints procedures and legal policies.

Official Company announcements will be published through the Announcements Centre. This provides a consistent public source for significant corporate, governance, brand and service updates.

## Private-company status

JA Group Services Ltd is a private company limited by shares. It is not listed on a stock exchange and the corporate website does not advertise shares, solicit public investment or invite members of the public to become shareholders.

A dedicated Shareholder Information page is provided for existing shareholders, duly authorised representatives and professional advisers. Access to non-public information remains subject to identity, authority, confidentiality and legal checks.

## Continuing development

The Company will continue to improve the corporate website and its service websites as systems, customer needs and operational arrangements develop. Planned maintenance may occasionally affect the availability of individual features, and clear notices will be displayed where appropriate.

JA Group Services Ltd remains committed to providing practical digital services supported by clear accountability, responsible governance and accessible customer information.`,
    category: 'Company Update',
    authorName: 'JA Group Services Ltd',
    status: 'published',
    isFeatured: true,
    seoTitle: 'JA Group Services Ltd expands corporate website and stakeholder information',
    seoDescription:
      'JA Group Services Ltd announces an expanded corporate website with clearer company, customer, brand, shareholder, supplier and stakeholder information.',
    publishedAt: '2026-08-06T00:00:00.000Z',
    createdAt: '2026-08-06T00:00:00.000Z',
    updatedAt: '2026-08-06T02:43:00.000Z',
  },
] as const;

export function getFallbackAnnouncement(slug: string): PublicAnnouncement | undefined {
  return PUBLIC_ANNOUNCEMENT_FALLBACKS.find((announcement) => announcement.slug === slug);
}

export function getFallbackAnnouncementSummaries() {
  return PUBLIC_ANNOUNCEMENT_FALLBACKS.map(({ content: _content, status: _status, seoTitle: _seoTitle, seoDescription: _seoDescription, createdAt: _createdAt, ...summary }) => summary);
}
