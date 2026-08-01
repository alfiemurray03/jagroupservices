import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Handshake, Building2, Globe, Users, CheckCircle, Mail, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const site = 'https://jagroupservices.co.uk';
const url = `${site}/partner-with-us`;
const title = 'Partner With Us — JA Group Services Ltd';
const description = 'We welcome appropriate partnership enquiries from service providers, platforms, and organisations that align with our operating standards and customer needs.';

const partnershipTypes = [
  {
    icon: Building2,
    title: 'Service Providers',
    desc: 'Businesses offering complementary services that add value to our customers and operating brands.',
  },
  {
    icon: Globe,
    title: 'Platform Integrations',
    desc: 'Technology platforms and digital tools that can be integrated with or referenced alongside our services.',
  },
  {
    icon: Users,
    title: 'Reseller & Affiliate',
    desc: 'Reseller arrangements and affiliate opportunities where appropriate referral structures can be established.',
  },
  {
    icon: Handshake,
    title: 'Service Collaborations',
    desc: 'Collaborative arrangements with organisations whose services align with our customer base and operating standards.',
  },
  {
    icon: Building2,
    title: 'Supplier Relationships',
    desc: 'Suppliers of products or services that support the operation and growth of JA Group Services Ltd and its brands.',
  },
  {
    icon: Globe,
    title: 'B2B Enquiries',
    desc: 'Business-to-business enquiries from organisations seeking a structured working relationship with JA Group Services Ltd.',
  },
];

const eligibleOrganisations = [
  'Registered businesses operating in the UK or internationally',
  'Platforms and technology providers with relevant services',
  'Organisations with a clear, legitimate business purpose',
  'Suppliers with products or services relevant to our operations',
  'Affiliate and referral partners with appropriate audience alignment',
  'B2B service providers seeking a structured working arrangement',
];

const assessmentCriteria = [
  {
    title: 'Alignment with our operating standards',
    desc: 'The partnership must align with the professional and ethical standards maintained by JA Group Services Ltd and its operating brands.',
  },
  {
    title: 'Relevance to our customer base',
    desc: 'The service or product must be relevant and genuinely useful to the customers and users of JA Group Services Ltd, Profile Centre, Planyx or JA Domain Hub.',
  },
  {
    title: 'Clear and transparent terms',
    desc: 'Any partnership arrangement must be clearly defined, with transparent terms agreed in writing before any public association is made.',
  },
  {
    title: 'Legitimate business standing',
    desc: 'The applying organisation must be a legitimately registered and operating business with verifiable credentials.',
  },
  {
    title: 'No conflict of interest',
    desc: 'The partnership must not create a conflict of interest with our existing operations, brands, or customer commitments.',
  },
];

export default function PartnerWithUsPage() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="bg-background text-foreground">
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#07152E] via-[#0A1F44] to-[#1A3FA8] py-16 sm:py-20 lg:py-24">
          <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-blue-400/15 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mx-auto max-w-3xl text-center"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur-sm">
                <Handshake className="h-4 w-4" />
                Partnership Enquiries
              </div>
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Partner with JA Group Services Ltd
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
                We welcome appropriate partnership enquiries from service providers, platforms, and organisations that align with our operating standards and customer needs.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Partnership Types"
              description="We consider a range of partnership arrangements depending on the nature of the opportunity and alignment with our services."
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {partnershipTypes.map(({ icon: Icon, title: itemTitle, desc }, index) => (
                <motion.article
                  key={itemTitle}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="mb-2 text-lg font-bold text-foreground">{itemTitle}</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary/40 py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Who Can Apply"
              description="We consider enquiries from a range of organisations, provided they meet our basic criteria."
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {eligibleOrganisations.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-card-foreground">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="What We Look For"
              description="We assess all partnership enquiries against a consistent set of criteria."
            />

            <div className="space-y-4">
              {assessmentCriteria.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="mb-1 font-semibold text-foreground">{item.title}</h2>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary/40 py-10 sm:py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-start gap-4 rounded-2xl border border-amber-400/35 bg-card p-5 shadow-sm sm:p-6"
            >
              <AlertCircle className="mt-0.5 h-6 w-6 shrink-0 text-amber-500" />
              <div>
                <h2 className="mb-2 font-semibold text-foreground">Important Notice</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  A partnership enquiry or referral arrangement with JA Group Services Ltd does not imply endorsement of any third-party product, service, or organisation unless formally stated in writing by JA Group Services Ltd. All partnerships are subject to review, approval, and formal agreement before any public association is made.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-br from-[#07152E] via-[#0A1F44] to-[#1A3FA8] py-16 sm:py-20">
          <div className="absolute -right-16 top-0 h-64 w-64 rounded-full bg-blue-300/10 blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Submit a Partnership Enquiry</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                To submit a partnership enquiry, please contact us directly. Include details about your organisation, the type of partnership you are proposing, and how it aligns with our services.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="w-full bg-blue-600 px-8 py-6 text-base font-bold text-white hover:bg-blue-500 sm:w-auto">
                  <Link to="/contactus">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full border-white/35 bg-white/5 px-6 py-6 text-base font-semibold text-white hover:bg-white/10 hover:text-white sm:w-auto">
                  <a href="mailto:contact@jagroupservices.co.uk" className="min-w-0">
                    <Mail className="mr-2 h-5 w-5 shrink-0" />
                    <span className="break-all">contact@jagroupservices.co.uk</span>
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

function SectionHeading({ title: heading, description: copy }: { title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
    >
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{heading}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{copy}</p>
    </motion.div>
  );
}
