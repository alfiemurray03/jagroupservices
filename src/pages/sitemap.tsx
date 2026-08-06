import { Helmet } from '@dr.pogodin/react-helmet';
import {
  Accessibility,
  AlertCircle,
  BriefcaseBusiness,
  Building2,
  Cookie,
  ExternalLink,
  FileText,
  Globe,
  GraduationCap,
  Handshake,
  Headphones,
  Home,
  Landmark,
  Mail,
  Megaphone,
  Network,
  Scale,
  Shield,
  ShieldCheck,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface SitemapLink {
  path: string;
  label: string;
  icon: LucideIcon;
  internal: boolean;
}

const siteStructure: readonly {
  category: string;
  description: string;
  icon: LucideIcon;
  links: readonly SitemapLink[];
}[] = [
  {
    category: 'Main and Services',
    description: 'Start here to understand the Company, explore services, read announcements or make contact.',
    icon: Home,
    links: [
      { path: '/', label: 'Home', icon: Home, internal: true },
      { path: '/services', label: 'Our Services', icon: Globe, internal: true },
      { path: '/about-our-divisions', label: 'Sousa Murray Brands', icon: Network, internal: true },
      { path: '/announcements', label: 'Announcements', icon: Megaphone, internal: true },
      { path: '/contactus', label: 'Contact Us', icon: Mail, internal: true },
    ],
  },
  {
    category: 'Company and Stakeholders',
    description: 'Corporate identity, leadership, governance and information for business stakeholders.',
    icon: Building2,
    links: [
      { path: '/about-us', label: 'About Us', icon: Building2, internal: true },
      { path: '/meet-the-team', label: 'Meet the Team', icon: Users, internal: true },
      { path: '/our-group-structure', label: 'Company and Brand Structure', icon: Network, internal: true },
      { path: '/governance', label: 'Governance', icon: Scale, internal: true },
      { path: '/corporate-information', label: 'Stakeholder Centre', icon: Landmark, internal: true },
    ],
  },
  {
    category: 'Work With Us',
    description: 'Information for suppliers, commercial partners, future affiliates, applicants and investors.',
    icon: Handshake,
    links: [
      { path: '/partner-with-us', label: 'Partners and Suppliers', icon: Handshake, internal: true },
      { path: '/affiliate-partners', label: 'Affiliate Partner Programme — Coming Soon', icon: Users, internal: true },
      { path: '/careers', label: 'Careers and Vacancies — Coming Soon', icon: BriefcaseBusiness, internal: true },
      { path: '/corporate-information#investors', label: 'Investor and Future Shareholder Information', icon: Landmark, internal: true },
    ],
  },
  {
    category: 'Support and Trust',
    description: 'Customer and learner help, personal data rights, security, accessibility and safeguarding.',
    icon: Headphones,
    links: [
      { path: '/customer-support', label: 'Customer Support Centre', icon: Headphones, internal: true },
      { path: '/privacy-centre', label: 'Privacy Centre', icon: Shield, internal: true },
      { path: '/security', label: 'Security and Vulnerability Disclosure', icon: ShieldCheck, internal: true },
      { path: '/accessibility-statement', label: 'Accessibility Statement', icon: Accessibility, internal: true },
      { path: '/safeguarding', label: 'Safeguarding and Trust', icon: Users, internal: true },
      { path: '/complaints-policy', label: 'Complaints & Refunds Policy', icon: AlertCircle, internal: true },
    ],
  },
  {
    category: 'Sousa Murray Websites',
    description: 'The four approved customer-facing website destinations operated through JA Group Services Ltd.',
    icon: Globe,
    links: [
      { path: 'https://sousamurraydomains.jagroupservices.co.uk/', label: 'Sousa Murray Domains', icon: Globe, internal: false },
      { path: 'https://sousamurraydomains.jagroupservices.co.uk/managed-websites', label: 'Sousa Murray Sites — Managed Websites', icon: Network, internal: false },
      { path: 'https://sousamurrayplaneia.jagroupservices.co.uk/', label: 'Sousa Murray Planeia', icon: Globe, internal: false },
      { path: 'https://sousamurrayprofiles.jagroupservices.co.uk/', label: 'Sousa Murray Profiles', icon: Users, internal: false },
      { path: 'https://sousamurrayelearning.jagroupservices.co.uk/', label: 'Sousa Murray eLearning', icon: GraduationCap, internal: false },
    ],
  },
  {
    category: 'Legal and Policies',
    description: 'Terms, privacy information, cookie information and formal complaint and refund arrangements.',
    icon: Scale,
    links: [
      { path: '/terms-of-service', label: 'Terms of Service', icon: FileText, internal: true },
      { path: '/privacy-policy', label: 'Privacy Policy', icon: Shield, internal: true },
      { path: '/cookies-policy', label: 'Cookies Policy', icon: Cookie, internal: true },
      { path: '/complaints-policy', label: 'Complaints & Refunds Policy', icon: AlertCircle, internal: true },
    ],
  },
] as const;

export default function SitemapPage() {
  return (
    <>
      <Helmet>
        <title>Sitemap | JA Group Services Ltd</title>
        <meta
          name="description"
          content="Browse the JA Group Services Ltd corporate website, including Company information, Sousa Murray brands, careers, partners, suppliers, announcements, support and legal pages."
        />
        <link rel="canonical" href="https://jagroupservices.co.uk/sitemap" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden bg-[#071a38] py-16 text-white sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                <Network className="h-4 w-4" />
                Website Directory
              </div>
              <h1 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">Sitemap</h1>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
                Find Company information, services, stakeholder routes, support, policies, careers and every approved Sousa Murray website from one structured directory.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl space-y-7 px-4 sm:px-6 lg:px-8">
            {siteStructure.map((section, sectionIndex) => {
              const SectionIcon = section.icon;

              return (
                <motion.section
                  key={section.category}
                  className="rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-sm sm:p-8"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: sectionIndex * 0.04 }}
                >
                  <div className="mb-6 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                      <SectionIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-card-foreground">{section.category}</h2>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{section.description}</p>
                    </div>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                    {section.links.map((link) => {
                      const LinkIcon = link.icon;
                      const className =
                        'group flex min-h-16 items-center gap-3 rounded-2xl border border-border bg-muted/35 p-4 transition-all hover:border-primary/30 hover:bg-primary/5';
                      const content = (
                        <>
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-card">
                            <LinkIcon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                          </div>
                          <span className="flex-1 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">{link.label}</span>
                          {!link.internal && <ExternalLink className="h-4 w-4 text-muted-foreground" />}
                        </>
                      );

                      return link.internal ? (
                        <Link key={link.path} to={link.path} className={className}>{content}</Link>
                      ) : (
                        <a key={link.path} href={link.path} target="_blank" rel="noopener noreferrer" className={className}>{content}</a>
                      );
                    })}
                  </div>
                </motion.section>
              );
            })}
          </div>
        </section>

        <section className="border-t border-border bg-secondary py-14 text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-foreground">Need help finding the right route?</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The Customer Support Centre can direct account, service, billing, privacy, security, safeguarding, learner and general enquiries.
            </p>
            <Link to="/customer-support" className="mt-7 inline-flex min-h-11 items-center rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              Open Customer Support
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
