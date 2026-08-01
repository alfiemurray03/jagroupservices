import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Building2, 
  Users, 
  Network, 
  FileText, 
  Shield, 
  Cookie, 
  Mail, 
  Scale, 
  Globe, 
  Megaphone,
  AlertCircle,
  Handshake,
  ExternalLink
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/components/LanguageProvider';
import { t } from '@/lib/translations';

export default function SitemapPage() {
  const { language } = useLanguage();
  const siteStructure = [
    {
      category: 'Main Pages',
      icon: Home,
      links: [
        { path: '/', label: 'Home', icon: Home, internal: true },
        { path: '/about-us', label: 'About Us', icon: Building2, internal: true },
        { path: '/about-our-divisions', label: 'About Our Divisions', icon: Users, internal: true },
        { path: '/our-group-structure', label: 'Our Group Structure', icon: Network, internal: true },
        { path: '/partner-with-us', label: 'Partner With Us', icon: Handshake, internal: true },
        { path: '/contactus', label: 'Contact Us', icon: Mail, internal: true },
        { path: '/corporate', label: 'Corporate', icon: Building2, internal: true },
        { path: '/announcements', label: 'Announcements', icon: Megaphone, internal: true },
      ],
    },
    {
      category: 'Operating Brands',
      icon: Globe,
      links: [
        { path: 'https://japrofilestudio.jagroupservices.co.uk/', label: 'JA Profile Studio', icon: Users, internal: false },
        { path: 'https://jadomainhub.jagroupservices.co.uk/', label: 'JA Domain Hub', icon: Globe, internal: false },
      ],
    },
    {
      category: 'Legal & Policies',
      icon: Scale,
      links: [
        { path: '/terms-of-service', label: 'Terms of Service', icon: FileText, internal: true },
        { path: '/privacy-policy', label: 'Privacy Policy', icon: Shield, internal: true },
        { path: '/cookies-policy', label: 'Cookies Policy', icon: Cookie, internal: true },
        { path: '/complaints-policy', label: 'Complaints Policy', icon: AlertCircle, internal: true },
      ],
    },
  ];

  return (
    <>
      <title>Sitemap — JA Group Services Ltd</title>
      <meta name="description" content="Complete sitemap of JA Group Services Ltd website. Find all pages and navigate easily through our website." />
      <link rel="canonical" href="https://jagroupservices.co.uk/sitemap" />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0A1F44] to-[#1e3a5f] text-white py-20 lg:py-32">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-block px-4 py-2 bg-[#2563EB]/20 rounded-full mb-6">
                <span className="text-sm font-semibold text-[#60A5FA]">{t('sitemapPage.badge', language)}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {t('sitemapPage.title', language)}
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                {t('sitemapPage.subtitle', language)}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-12">
              {siteStructure.map((section, sectionIndex) => {
                const SectionIcon = section.icon;
                return (
                  <motion.div
                    key={section.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                  >
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-8">
                        {/* Category Header */}
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#0A1F44]/10">
                          <div className="w-12 h-12 bg-[#2563EB]/10 rounded-lg flex items-center justify-center">
                            <SectionIcon className="w-6 h-6 text-[#2563EB]" />
                          </div>
                          <h2 className="text-2xl font-bold text-[#0A1F44]">
                            {section.category}
                          </h2>
                        </div>

                        {/* Links Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {section.links.map((link, linkIndex) => {
                            const LinkIcon = link.icon;
                            const isExternal = !link.internal;
                            return (
                              <motion.div
                                key={link.path}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: linkIndex * 0.05 }}
                              >
                                {isExternal ? (
                                  <a
                                    href={link.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 hover:bg-[#2563EB]/5 border border-transparent hover:border-[#2563EB]/20 transition-all group"
                                  >
                                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563EB]/10 transition-colors">
                                      <LinkIcon className="w-4 h-4 text-[#0A1F44]/60 group-hover:text-[#2563EB] transition-colors" />
                                    </div>
                                    <span className="text-sm text-[#0A1F44] group-hover:text-[#2563EB] transition-colors font-medium flex-1">
                                      {link.label}
                                    </span>
                                    <ExternalLink className="w-3 h-3 text-[#0A1F44]/40 group-hover:text-[#2563EB]" />
                                  </a>
                                ) : (
                                <Link
                                  to={link.path}
                                  className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 hover:bg-[#2563EB]/5 border border-transparent hover:border-[#2563EB]/20 transition-all group"
                                >
                                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563EB]/10 transition-colors">
                                    <LinkIcon className="w-4 h-4 text-[#0A1F44]/60 group-hover:text-[#2563EB] transition-colors" />
                                  </div>
                                  <span className="text-sm text-[#0A1F44] group-hover:text-[#2563EB] transition-colors font-medium">
                                    {link.label}
                                  </span>
                                </Link>
                                )}
                              </motion.div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-[#0A1F44] mb-4">
                  Need Help Finding Something?
                </h3>
                <p className="text-[#0A1F44]/70 mb-6">
                  If you can't find what you're looking for, please contact us and we'll be happy to assist.
                </p>
                <Link
                  to="/contactus"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white rounded-lg hover:bg-[#2563EB]/90 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
