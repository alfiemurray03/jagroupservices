export interface TeamMember {
  slug: string;
  name: string;
  firstName: string;
  role: string;
  company: string;
  profile: readonly string[];
  phone: string;
  phoneHref: string;
  email: string;
  website: string;
}

export const teamMembers: readonly TeamMember[] = [
  {
    slug: 'jack-nicolau-sousa-da-silva',
    name: 'Jack Nicolau Sousa Da Silva',
    firstName: 'Jack',
    role: 'Group Chief Executive Officer',
    company: 'JA Group Services Ltd',
    profile: [
      'Jack Nicolau Sousa Da Silva serves as Group Chief Executive Officer of JA Group Services Ltd and provides strategic leadership across the organisation. He oversees service development, digital infrastructure and long-term growth initiatives.',
      'Jack Nicolau Sousa Da Silva also serves as a Director of JSDS Group Ltd, which acts as the corporate director of JA Group Services Ltd.',
    ],
    phone: '020 3834 2790',
    phoneHref: '02038342790',
    email: 'Jack@jagroupservices.co.uk',
    website: 'jagroupservices.co.uk',
  },
  {
    slug: 'alfie-thomas-holywood-murray',
    name: 'Alfie Thomas Holywood Murray',
    firstName: 'Alfie',
    role: 'Chief Executive Officer',
    company: 'JA Group Services Ltd',
    profile: [
      'Alfie Thomas Holywood Murray serves as Chief Executive Officer of JA Group Services Ltd and oversees operational management and service delivery across the organisation.',
    ],
    phone: '020 3834 2790',
    phoneHref: '02038342790',
    email: 'Alfie@jagroupservices.co.uk',
    website: 'jagroupservices.co.uk',
  },
] as const;

export function getTeamMember(slug: string): TeamMember {
  const member = teamMembers.find((teamMember) => teamMember.slug === slug);

  if (!member) {
    throw new Error(`Unknown team member: ${slug}`);
  }

  return member;
}
