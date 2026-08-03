import { Helmet } from '@dr.pogodin/react-helmet';
import { ArrowRight, Building2, Mail, Phone, UserRound, UsersRound } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { teamMembers } from '@/data/team-members';

const site = 'https://jagroupservices.co.uk';
const url = `${site}/meet-the-team`;

export default function MeetTheTeamPage() {
  return (
    <>
      <Helmet>
        <title>Meet the Team | JA Group Services Ltd</title>
        <meta
          name="description"
          content="Meet the leadership team responsible for the strategic direction, management and service delivery of JA Group Services Ltd."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Meet the Team | JA Group Services Ltd" />
        <meta
          property="og:description"
          content="Meet the leadership team at JA Group Services Ltd."
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden bg-[#0A1F44] py-16 text-white sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mx-auto max-w-4xl space-y-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                <UsersRound className="h-4 w-4" />
                Company Leadership
              </div>
              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Meet the Team
              </h1>
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
                Meet the people providing strategic leadership, operational management and oversight across JA Group Services Ltd.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Leadership profiles
              </p>
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                Responsible leadership with clear accountability
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Our leadership team directs the Company’s strategy, operations, service development and customer delivery.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {teamMembers.map((member, index) => (
                <motion.article
                  key={member.slug}
                  className="overflow-hidden rounded-3xl border border-border bg-card text-card-foreground shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div className="flex min-h-52 flex-col items-center justify-center border-b border-border bg-muted/70 p-8 text-center">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-border bg-card shadow-sm">
                      <UserRound className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Photo coming soon
                    </p>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold tracking-tight text-card-foreground">
                        {member.name}
                      </h3>
                      <div className="mt-3 space-y-1.5">
                        {member.roles.map((role, roleIndex) => (
                          <p
                            key={role}
                            className={roleIndex === 0 ? 'font-semibold text-primary' : 'text-sm font-medium text-foreground'}
                          >
                            {role}
                          </p>
                        ))}
                      </div>
                      <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                        <Building2 className="mt-0.5 h-4 w-4 shrink-0" />
                        {member.company}
                      </p>
                    </div>

                    <p className="mb-6 leading-relaxed text-muted-foreground">
                      {member.profile[0]}
                    </p>

                    <div className="mb-6 space-y-3 border-t border-border pt-5">
                      <a
                        href={`tel:${member.phoneHref}`}
                        className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
                      >
                        <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
                        {member.phone}
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-3 break-all text-sm text-foreground transition-colors hover:text-primary"
                      >
                        <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                        {member.email}
                      </a>
                    </div>

                    <Button asChild className="min-h-11 w-full sm:w-auto">
                      <Link to={`/team/${member.slug}`}>
                        View {member.firstName}&apos;s profile
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
