import { motion } from 'motion/react';
import { Building2, Globe2, Users, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';

const site = 'https://jagroupservices.co.uk';
const url = `${site}/about-our-divisions`;

export default function AboutOurDivisionsPage() {
  return (
    <>
      <Helmet>
        <title>About Our Divisions — JA Group Services Ltd</title>
        <meta name="description" content="JA Group Services Ltd operates two focused brands: JA Profile Studio, a proprietary digital profile platform, and JA Domain Hub, a domain support and GoDaddy reseller storefront." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="About Our Divisions — JA Group Services Ltd" />
        <meta property="og:description" content="Learn about JA Profile Studio and JA Domain Hub — the two operating brands of JA Group Services Ltd." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>
        {/* Hero */}
        <section className="bg-[#0A1F44] py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center space-y-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                About Our Divisions
              </h1>
              <p className="text-white/80 text-xl leading-relaxed">
                JA Group Services Ltd operates two focused brands, each serving a distinct area of digital business for individuals and organisations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* JA Profile Studio */}
        <section className="bg-white py-20 lg:py-28 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-[#1A3FA8]/10 text-[#1A3FA8] px-4 py-2 rounded-full text-sm font-medium">
                    <Users className="h-4 w-4" />
                    Operating brand of JA Group Services Ltd
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44]">JA Profile Studio</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    A proprietary digital profile platform developed, owned, operated, and managed by JA Group Services Ltd. JA Profile Studio is focused on personal profiles, organisation profiles, QR sharing, digital profile pages, and profile subscriptions.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    JA Profile Studio helps individuals, businesses, and organisations create professional digital profile pages with links, QR codes, contact options, media, documents, themes, and organisation profile tools.
                  </p>
                  <div className="pt-2">
                    <a href="https://japrofilestudio.jagroupservices.co.uk/" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="bg-[#1A3FA8] hover:bg-[#153588] text-white font-bold px-8 py-5">
                        Visit JA Profile Studio
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-[#0A1F44] text-lg mb-4">Services Offered</h3>
                  {[
                    'Personal digital profile pages',
                    'Organisation profile pages',
                    'QR code sharing and download',
                    'Custom profile themes and branding',
                    'Contact enquiry forms',
                    'WhatsApp contact setup',
                    'Gallery and media attachments',
                    'PDF document attachments',
                    'Email signature generation',
                    'vCard download',
                    'Advanced analytics',
                    'Team seats for organisations',
                    'Profile subscription plans',
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="h-4 w-4 text-[#1A3FA8] shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* JA Domain Hub */}
        <section className="bg-[#F8FAFF] py-20 lg:py-28 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-[#0A1F44]/10 text-[#0A1F44] px-4 py-2 rounded-full text-sm font-medium">
                    <Globe2 className="h-4 w-4" />
                    Operating brand of JA Group Services Ltd
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44]">JA Domain Hub</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    The customer-facing domain support and GoDaddy reseller storefront brand operated by JA Group Services Ltd. Through the GoDaddy reseller storefront, customers can search for domains, purchase domain-related products, and access domain services powered by GoDaddy.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    JA Domain Hub helps customers understand, choose, structure, and manage their online presence — including domains, subdomains, DNS setup, email setup, and connections to websites or profile pages.
                  </p>
                  <p className="text-xs text-gray-500 bg-white border border-gray-200 rounded-xl p-4 leading-relaxed">
                    Domain purchases and related products may be completed through our GoDaddy reseller storefront. Domain availability, pricing, registration, renewal, billing, and provider terms are controlled by GoDaddy and applicable third-party providers.
                  </p>
                  <div className="pt-2">
                    <a href="https://jadomainhub.jagroupservices.co.uk/" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="bg-[#0A1F44] hover:bg-[#0d2a5e] text-white font-bold px-8 py-5">
                        Visit JA Domain Hub
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-[#0A1F44] text-lg mb-4">Services Offered</h3>
                  {[
                    'Domain search support',
                    'GoDaddy reseller storefront access',
                    'Subdomain planning and advice',
                    'DNS setup guidance',
                    'Business email setup guidance',
                    'Website and profile connection support',
                    'Custom domain guidance for JA Profile Studio',
                    'Domain renewal and ownership guidance',
                    'Online presence setup support',
                    'Domain portfolio organisation',
                    'Domain and subdomain naming advice',
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="h-4 w-4 text-[#0A1F44] shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Group Structure CTA */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Building2 className="h-10 w-10 text-[#1A3FA8] mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A1F44] mb-3">Our Group Structure</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Learn more about how JA Group Services Ltd is structured and how our operating brands relate to the main company.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-[#1A3FA8] hover:bg-[#153588] text-white font-bold px-8 py-5">
                    <Link to="/our-group-structure">
                      View Group Structure
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-[#1A3FA8] text-[#1A3FA8] hover:bg-[#EEF3FF] px-8 py-5">
                    <Link to="/contactus">Contact Us</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
