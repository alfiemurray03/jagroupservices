import { motion } from 'motion/react';
import { ArrowRight, Shield, Building2, Users, Award, Globe2, Mail, Phone, ExternalLink, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';
import { useLanguage } from '@/components/LanguageProvider';
import { t } from '@/lib/translations';

export default function HomePage() {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>JA Group Services Ltd — Digital Identity, Domains & Business Services</title>
        <meta
          name="description"
          content="JA Group Services Ltd supports digital identity, online presence, domains, profile pages, and structured business services through focused operating brands: Profile Centre, Planyx and JA Domain Hub." />
        <link rel="canonical" href="https://jagroupservices.co.uk/" />
        <meta property="og:title" content="JA Group Services Ltd — Digital Identity, Domains & Business Services" />
        <meta property="og:description" content="JA Group Services Ltd supports digital identity, online presence, domains, profile pages, and structured business services through focused operating brands." />
        <meta property="og:url" content="https://jagroupservices.co.uk/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen bg-white">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-white pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#EEF3FF] rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F0F7FF] rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: 'radial-gradient(circle, #1A3FA812 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left */}
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55 }}>

                  <motion.h1
                    className="text-5xl md:text-6xl font-bold text-[#0A1F44] leading-[1.06] tracking-tight"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.15 }}>
                    {t('hero.title', language)}
                  </motion.h1>

                  <motion.p
                    className="text-gray-600 text-lg leading-relaxed max-w-lg"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.22 }}>
                    JA Group Services Ltd supports digital identity, online presence, domains, profile pages, and structured business services through focused operating brands.
                  </motion.p>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-3"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.3 }}>
                    <Button asChild size="lg" className="bg-[#1A3FA8] hover:bg-[#153588] text-white px-8 py-6 text-base font-bold shadow-lg shadow-[#1A3FA8]/20">
                      <Link to="/about-our-divisions">
                        Our Operating Brands
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-2 border-[#1A3FA8] text-[#1A3FA8] hover:bg-[#EEF3FF] px-8 py-6 text-base font-semibold">
                      <Link to="/contactus">
                        {t('hero.cta.contact', language)}
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Right — stat cards */}
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: 0.2 }}>
                  {[
                    { icon: Building2, label: 'UK Registered', value: 'Company No. 16314179', color: '#1A3FA8' },
                    { icon: Shield, label: 'ICO Registered', value: 'ZB877370', color: '#0891B2' },
                    { icon: Globe2, label: 'Operating Brands', value: 'Profile Centre, Planyx & JA Domain Hub', color: '#7C3AED' },
                    { icon: Award, label: 'Service Focus', value: 'Digital Identity & Domains', color: '#059669' },
                  ].map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={i}
                        className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-gray-200 transition-all"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                        whileHover={{ y: -4 }}>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${stat.color}14` }}>
                          <Icon className="h-5 w-5" style={{ color: stat.color }} />
                        </div>
                        <p className="text-xs text-gray-400 font-medium mb-1">{stat.label}</p>
                        <p className="text-sm font-bold text-[#0A1F44]">{stat.value}</p>
                      </motion.div>
                    );
                  })}
                </motion.div>

              </div>
            </div>
          </div>
        </section>

        {/* ── OPERATING BRANDS ── */}
        <section className="bg-[#F8FAFF] py-20 lg:py-28 border-y border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">

              <motion.div
                className="mb-14 text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">Our Operating Brands</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  JA Group Services Ltd operates three focused brands, each serving a distinct area of digital business.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Profile Centre */}
                <motion.div
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-all"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -4 }}>
                  <div className="bg-gradient-to-br from-[#1A3FA8] to-[#0891B2] p-8 text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Profile Centre</h3>
                    <p className="text-white/80 text-sm">An operating brand of JA Group Services Ltd</p>
                  </div>
                  <div className="p-8 space-y-5">
                    <p className="text-gray-600 leading-relaxed">
                      A digital profile platform operated by JA Group Services Ltd. Create and manage professional profile pages with links, QR codes, contact options, media, documents, themes and organisation tools.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Personal Profiles', 'Organisation Profiles', 'QR Sharing', 'Digital Identity'].map((tag) => (
                        <span key={tag} className="bg-[#EEF3FF] text-[#1A3FA8] border border-[#C7D7F5] px-3 py-1 rounded-full text-xs font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href="https://profilecentre.jagroupservices.co.uk/" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="bg-[#1A3FA8] hover:bg-[#153588] text-white font-bold px-8 py-5 text-base w-full">
                        Visit Profile Centre
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </motion.div>

                {/* Planyx */}
                <motion.div
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-all"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -4 }}>
                  <div className="bg-gradient-to-br from-[#312E81] to-[#7C3AED] p-8 text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                      <Globe2 className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Planyx</h3>
                    <p className="text-white/80 text-sm">An operating brand of JA Group Services Ltd</p>
                  </div>
                  <div className="p-8 space-y-5">
                    <p className="text-gray-600 leading-relaxed">
                      An experience and itinerary planning platform that helps customers organise travel, days out and activities while exploring selected affiliate partner options.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Itinerary Planning', 'Experiences', 'Shared Plans', 'Partner Discovery'].map((tag) => (
                        <span key={tag} className="bg-[#F3E8FF] text-[#6D28D9] border border-[#DDD6FE] px-3 py-1 rounded-full text-xs font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href="https://planyx.jagroupservices.co.uk/" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-bold px-8 py-5 text-base w-full">
                        Visit Planyx
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </motion.div>

                {/* JA Domain Hub */}
                <motion.div
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-all"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -4 }}>
                  <div className="bg-gradient-to-br from-[#0A1F44] to-[#1A3FA8] p-8 text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                      <Globe2 className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">JA Domain Hub</h3>
                    <p className="text-white/80 text-sm">An operating brand of JA Group Services Ltd</p>
                  </div>
                  <div className="p-8 space-y-5">
                    <p className="text-gray-600 leading-relaxed">
                      The customer-facing domain support and GoDaddy reseller storefront brand operated by JA Group Services Ltd. Search for domains, purchase domain-related products, and access domain services powered by GoDaddy.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Domain Search', 'DNS Setup', 'Email Setup', 'GoDaddy Reseller'].map((tag) => (
                        <span key={tag} className="bg-[#EEF3FF] text-[#1A3FA8] border border-[#C7D7F5] px-3 py-1 rounded-full text-xs font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href="https://jadomainhub.jagroupservices.co.uk/" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="bg-[#0A1F44] hover:bg-[#0d2a5e] text-white font-bold px-8 py-5 text-base w-full">
                        Visit JA Domain Hub
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="bg-white py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">

              <motion.div
                className="mb-14"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-3">{t('why.title', language)}</h2>
                <p className="text-gray-600 text-lg max-w-2xl">{t('why.subtitle', language)}</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { icon: Building2, title: 'UK Registered Business', desc: 'Registered in England & Wales. Company No. 16314179.', color: '#1A3FA8', delay: 0 },
                  { icon: Users, title: 'Customer Focused', desc: 'Our operating brands are built around the needs of individuals and businesses.', color: '#0891B2', delay: 0.08 },
                  { icon: Shield, title: 'ICO Registered', desc: 'Registered with the Information Commissioner\'s Office. ICO No. ZB877370.', color: '#7C3AED', delay: 0.16 },
                  { icon: Award, title: 'Professional Standards', desc: 'We maintain clear operating standards across all our brands and services.', color: '#059669', delay: 0.24 },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:border-gray-200 transition-all group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: item.delay }}
                      whileHover={{ y: -4 }}>
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${item.color}14` }}>
                        <Icon className="h-6 w-6" style={{ color: item.color }} />
                      </div>
                      <h3 className="font-bold text-[#0A1F44] text-base mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* ── PARTNER WITH US ── */}
        <section className="bg-[#F8FAFF] py-20 lg:py-24 border-y border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6">
                <div className="w-14 h-14 bg-[#1A3FA8]/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Handshake className="h-7 w-7 text-[#1A3FA8]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44]">Partner With Us</h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                  We welcome appropriate partnership enquiries from service providers, platforms, and organisations that align with our operating standards and customer needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                  <Button asChild size="lg" className="bg-[#1A3FA8] hover:bg-[#153588] text-white px-10 py-6 text-base font-bold">
                    <Link to="/partner-with-us">
                      View Partnership Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-[#1A3FA8] text-[#1A3FA8] hover:bg-[#EEF3FF] px-10 py-6 text-base font-semibold">
                    <Link to="/contactus">Contact Us</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CONTACT CTA ── */}
        <section className="bg-[#1A3FA8] py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/8 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">

                <motion.div
                  className="space-y-5"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}>
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">{t('contact.title', language)}</h2>
                  <p className="text-white/80 text-lg leading-relaxed">{t('contact.subtitle', language)}</p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button asChild size="lg" className="bg-white text-[#1A3FA8] hover:bg-gray-100 px-8 py-6 text-base font-bold shadow-xl">
                      <Link to="/contactus">
                        {t('contact.cta.primary', language)}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="ghost" className="text-white border border-white/30 hover:bg-white/10 px-8 py-6 text-base font-semibold">
                      <Link to="/about-us">{t('contact.cta.secondary', language)}</Link>
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-col gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 }}>
                  <a href="tel:02038342790" className="flex items-center gap-4 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 hover:bg-white/15 transition-all">
                    <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs mb-0.5">Phone</p>
                      <p className="text-white font-semibold text-sm">020 3834 2790</p>
                    </div>
                  </a>
                  <a href="mailto:contact@jagroupservices.co.uk" className="flex items-center gap-4 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 hover:bg-white/15 transition-all">
                    <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs mb-0.5">Email</p>
                      <p className="text-white font-semibold text-sm">contact@jagroupservices.co.uk</p>
                    </div>
                  </a>
                </motion.div>

              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
