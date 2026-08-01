import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Handshake, Building2, Globe, Users, CheckCircle, Mail, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const site = 'https://jagroupservices.co.uk';
const url = `${site}/partner-with-us`;
const title = 'Partner With Us — JA Group Services Ltd';
const description = 'We welcome appropriate partnership enquiries from service providers, platforms, and organisations that align with our operating standards and customer needs.';

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

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#F0F4FF] to-white py-20 lg:py-28 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-[#1A3FA8]/10 text-[#1A3FA8] px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Handshake className="h-4 w-4" />
                  Partnership Enquiries
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#0A1F44] leading-tight">
                  Partner with JA Group Services Ltd
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mt-4">
                  We welcome appropriate partnership enquiries from service providers, platforms, and organisations that align with our operating standards and customer needs.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="bg-white py-20 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">Partnership Types</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We consider a range of partnership arrangements depending on the nature of the opportunity and alignment with our services.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Building2,
                    title: 'Service Providers',
                    desc: 'Businesses offering complementary services that add value to our customers and operating brands.'
                  },
                  {
                    icon: Globe,
                    title: 'Platform Integrations',
                    desc: 'Technology platforms and digital tools that can be integrated with or referenced alongside our services.'
                  },
                  {
                    icon: Users,
                    title: 'Reseller & Affiliate',
                    desc: 'Reseller arrangements and affiliate opportunities where appropriate referral structures can be established.'
                  },
                  {
                    icon: Handshake,
                    title: 'Service Collaborations',
                    desc: 'Collaborative arrangements with organisations whose services align with our customer base and operating standards.'
                  },
                  {
                    icon: Building2,
                    title: 'Supplier Relationships',
                    desc: 'Suppliers of products or services that support the operation and growth of JA Group Services Ltd and its brands.'
                  },
                  {
                    icon: Globe,
                    title: 'B2B Enquiries',
                    desc: 'Business-to-business enquiries from organisations seeking a structured working relationship with JA Group Services Ltd.'
                  },
                ].map((type, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="bg-[#F8FAFF] border border-[#E0E8FF] rounded-2xl p-6"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#1A3FA8]/10 flex items-center justify-center mb-4">
                      <type.icon className="h-5 w-5 text-[#1A3FA8]" />
                    </div>
                    <h3 className="font-bold text-[#0A1F44] text-lg mb-2">{type.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{type.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who Can Apply */}
        <section className="bg-[#F8FAFF] py-20 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">Who Can Apply</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We consider enquiries from a range of organisations, provided they meet our basic criteria.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Registered businesses operating in the UK or internationally',
                  'Platforms and technology providers with relevant services',
                  'Organisations with a clear, legitimate business purpose',
                  'Suppliers with products or services relevant to our operations',
                  'Affiliate and referral partners with appropriate audience alignment',
                  'B2B service providers seeking a structured working arrangement',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4"
                  >
                    <CheckCircle className="h-5 w-5 text-[#1A3FA8] shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Look For */}
        <section className="bg-white py-20 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">What We Look For</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We assess all partnership enquiries against a consistent set of criteria.
                </p>
              </motion.div>

              <div className="space-y-4">
                {[
                  {
                    title: 'Alignment with our operating standards',
                    desc: 'The partnership must align with the professional and ethical standards maintained by JA Group Services Ltd and its operating brands.'
                  },
                  {
                    title: 'Relevance to our customer base',
                    desc: 'The service or product must be relevant and genuinely useful to the customers and users of JA Group Services Ltd, JA Profile Studio, or JA Domain Hub.'
                  },
                  {
                    title: 'Clear and transparent terms',
                    desc: 'Any partnership arrangement must be clearly defined, with transparent terms agreed in writing before any public association is made.'
                  },
                  {
                    title: 'Legitimate business standing',
                    desc: 'The applying organisation must be a legitimately registered and operating business with verifiable credentials.'
                  },
                  {
                    title: 'No conflict of interest',
                    desc: 'The partnership must not create a conflict of interest with our existing operations, brands, or customer commitments.'
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-4 border border-gray-200 rounded-xl p-5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1A3FA8]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#1A3FA8] font-bold text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0A1F44] mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-[#F8FAFF] py-12 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-start gap-4 bg-white border border-amber-200 rounded-2xl p-6"
              >
                <AlertCircle className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#0A1F44] mb-2">Important Notice</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A partnership enquiry or referral arrangement with JA Group Services Ltd does not imply endorsement of any third-party product, service, or organisation unless formally stated in writing by JA Group Services Ltd. All partnerships are subject to review, approval, and formal agreement before any public association is made.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-[#0A1F44] py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Submit a Partnership Enquiry
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  To submit a partnership enquiry, please contact us directly. Include details about your organisation, the type of partnership you are proposing, and how it aligns with our services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contactus">
                    <Button
                      size="lg"
                      className="bg-white text-[#0A1F44] hover:bg-gray-100 px-10 py-6 text-lg font-bold"
                    >
                      Contact Us
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <a href="mailto:info@jagroupservices.co.uk">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white/10 px-10 py-6 text-lg font-bold"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      info@jagroupservices.co.uk
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
