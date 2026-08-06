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
 * A published corporate announcement that keeps the public newsroom useful when
 * the editable announcements database is temporarily unavailable or has not yet
 * been provisioned in a deployment environment.
 *
 * Database announcements remain the primary source. This record is used only as
 * a resilient public fallback and mirrors the initial announcement seeded by the
 * content migration.
 */
export const PUBLIC_ANNOUNCEMENT_FALLBACKS: readonly PublicAnnouncement[] = [
  {
    id: -1,
    title: 'JA Group Services Ltd confirms the Sousa Murray website structure',
    slug: 'sousa-murray-website-structure-confirmed',
    summary:
      'The corporate website now acts as the central information point for the approved Sousa Murray brands and their public website destinations.',
    content: `## A single corporate home

JA Group Services Ltd has confirmed the public website structure for the Sousa Murray master brand. The corporate website remains the central source of company, governance, support, supplier, partner and legal information.

## Approved website destinations

- **Sousa Murray Domains:** sousamurraydomains.jagroupservices.co.uk
- **Sousa Murray Planeia:** sousamurrayplaneia.jagroupservices.co.uk
- **Sousa Murray Profiles:** sousamurrayprofiles.jagroupservices.co.uk
- **Sousa Murray eLearning:** sousamurrayelearning.jagroupservices.co.uk

**Sousa Murray Sites** is the Managed Website Services area within the Sousa Murray Domains website and does not use a separate public subdomain.

## Central accountability

JA Group Services Ltd remains the legal operating company behind the approved services, with central responsibility for governance, customer operations, complaints and data protection unless a service-specific notice explains a third-party provider role.`,
    category: 'Corporate',
    authorName: 'JA Group Services Ltd',
    status: 'published',
    isFeatured: true,
    seoTitle: 'Sousa Murray website structure confirmed | JA Group Services Ltd',
    seoDescription:
      'JA Group Services Ltd confirms the approved Sousa Murray brands, subdomains and the position of Sousa Murray Sites within Sousa Murray Domains.',
    publishedAt: '2026-08-06T00:00:00.000Z',
    createdAt: '2026-08-06T00:00:00.000Z',
    updatedAt: '2026-08-06T00:00:00.000Z',
  },
] as const;

export function getFallbackAnnouncement(slug: string): PublicAnnouncement | undefined {
  return PUBLIC_ANNOUNCEMENT_FALLBACKS.find((announcement) => announcement.slug === slug);
}

export function getFallbackAnnouncementSummaries() {
  return PUBLIC_ANNOUNCEMENT_FALLBACKS.map(({ content: _content, status: _status, seoTitle: _seoTitle, seoDescription: _seoDescription, createdAt: _createdAt, ...summary }) => summary);
}
