export const BRAND_SITES = {
  domains: {
    name: 'Sousa Murray Domains',
    url: 'https://sousamurraydomains.jagroupservices.co.uk/',
    host: 'sousamurraydomains.jagroupservices.co.uk',
    description: 'Domain registration, transfer, renewal, hosting and related authorised reseller services.',
  },
  sites: {
    name: 'Sousa Murray Sites',
    url: 'https://sousamurraydomains.jagroupservices.co.uk/managed-websites',
    host: 'sousamurraydomains.jagroupservices.co.uk',
    description: 'Managed Website Services provided through the Sousa Murray Domains website.',
    parentBrand: 'Sousa Murray Domains',
  },
  planeia: {
    name: 'Sousa Murray Planeia',
    url: 'https://sousamurrayplaneia.jagroupservices.co.uk/',
    host: 'sousamurrayplaneia.jagroupservices.co.uk',
    description: 'Guided planning tools for trips, occasions, budgets, checklists and shared experiences.',
  },
  profiles: {
    name: 'Sousa Murray Profiles',
    url: 'https://sousamurrayprofiles.jagroupservices.co.uk/',
    host: 'sousamurrayprofiles.jagroupservices.co.uk',
    description: 'Digital profiles, contact sharing, QR access and profile administration.',
  },
  elearning: {
    name: 'Sousa Murray eLearning',
    url: 'https://sousamurrayelearning.jagroupservices.co.uk/',
    host: 'sousamurrayelearning.jagroupservices.co.uk',
    description: 'Authorised e-learning reseller services, enrolment administration and learner support.',
  },
} as const;

export const BRAND_WEBSITE_DESTINATIONS = [
  BRAND_SITES.domains,
  BRAND_SITES.planeia,
  BRAND_SITES.profiles,
  BRAND_SITES.elearning,
] as const;
