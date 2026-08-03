import { Helmet } from '@dr.pogodin/react-helmet';
import { ArrowLeft, Building2, Globe, Mail, Phone, UserRound } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import type { TeamMember } from '@/data/team-members';

interface TeamMemberProfilePageProps {
  member: TeamMember;
}

export default function TeamMemberProfilePage({ member }: TeamMemberProfilePageProps) {
  const url = `https://jagroupservices.co.uk/team/${member.slug}`;
  const description = `${member.name}, ${member.role} of ${member.company}.`;

  return (
    <>
      <Helmet>
        <title>{member.name} – {member.role} | JA Group Services Ltd</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={`${member.name} – ${member.role}`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <main className="min-h-screen bg-background py-10 text-foreground sm:py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/meet-the-team"
            className="mb-8 inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Meet the Team
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' as const }}
            className="overflow-hidden rounded-3xl border border-border bg-card text-card-foreground shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr]">
              <div className="flex min-h-72 flex-col items-center justify-center border-b border-border bg-muted/70 p-8 text-center lg:min-h-[560px] lg:border-b-0 lg:border-r">
                <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-border bg-card shadow-sm">
                  <UserRound className="h-12 w-12 text-muted-foreground" />
                </div>
                <p className="text-sm font-semibold text-muted-foreground">Photo coming soon</p>
              </div>

              <div className="p-7 sm:p-10 lg:p-12">
                <div className="mb-8">
                  <h1 className="text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl">
                    {member.name}
                  </h1>
                  <p className="mt-3 text-lg font-semibold text-primary">{member.role}</p>
                  <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="h-4 w-4" />
                    {member.company}
                  </p>
                </div>

                <div className="border-t border-border pt-8">
                  <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Profile
                  </h2>
                  <div className="space-y-4">
                    {member.profile.map((paragraph) => (
                      <p key={paragraph} className="leading-relaxed text-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-9 border-t border-border pt-8">
                  <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Contact
                  </h2>
                  <div className="space-y-4">
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
                    <a
                      href={`https://${member.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
                    >
                      <Globe className="h-4 w-4 shrink-0 text-muted-foreground" />
                      {member.website}
                    </a>
                  </div>
                </div>

                <Button asChild className="mt-8 min-h-11 w-full sm:w-auto">
                  <a href={`mailto:${member.email}`}>Contact {member.firstName}</a>
                </Button>
              </div>
            </div>
          </motion.article>
        </div>
      </main>
    </>
  );
}
