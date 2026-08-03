export interface TeamMember {
  slug: string;
  name: string;
  firstName: string;
  monogram: string;
  leadershipLabel: string;
  roles: readonly string[];
  company: string;
  profile: readonly string[];
  areas: readonly string[];
  phone: string;
  phoneHref: string;
  email: string;
  website: string;
}

export const teamMembers: readonly TeamMember[] = [
  {
    slug: 'jack-nicolau-sousa-da-silva',
    name: 'Mr Jack Nicolau Sousa Da Silva',
    firstName: 'Jack',
    monogram: 'JS',
    leadershipLabel: 'Group and Board Leadership',
    roles: [
      'Group Chief Executive Officer, JSDS Group Ltd',
      'Representative of the Corporate Director (JSDS Group Ltd)',
      'Chairman to the Board of Directors and Shareholders at JA Group Services Ltd',
    ],
    company: 'JSDS Group Ltd and JA Group Services Ltd',
    profile: [
      'Mr Jack Nicolau Sousa Da Silva serves as Group Chief Executive Officer of JSDS Group Ltd.',
      'He represents JSDS Group Ltd in its capacity as the corporate director of JA Group Services Ltd and serves as Chairman to the Board of Directors and Shareholders at JA Group Services Ltd.',
    ],
    areas: [
      'Group strategy and long-term direction',
      'Representation of the corporate director',
      'Board and shareholder chairmanship',
    ],
    phone: '020 3834 2790',
    phoneHref: '02038342790',
    email: 'jack@jagroupservices.co.uk',
    website: 'jagroupservices.co.uk',
  },
  {
    slug: 'alfie-thomas-holywood-murray',
    name: 'Mr Alfie Thomas Holywood Murray',
    firstName: 'Alfie',
    monogram: 'AM',
    leadershipLabel: 'Executive and Data Protection Leadership',
    roles: [
      'Company Director',
      'Chief Executive Officer (DPO)',
      'Director of Data Protection | Data Protection Officer',
    ],
    company: 'JA Group Services Ltd',
    profile: [
      'Mr Alfie Thomas Holywood Murray serves as a Company Director and Chief Executive Officer of JA Group Services Ltd.',
      'He also serves as Director of Data Protection and Data Protection Officer, with responsibility for the Company’s data protection governance, compliance and accountability arrangements.',
    ],
    areas: [
      'Company management and operational delivery',
      'Data protection governance and compliance',
      'Executive implementation and accountability',
    ],
    phone: '020 3834 2790',
    phoneHref: '02038342790',
    email: 'alfie@jagroupservices.co.uk',
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
