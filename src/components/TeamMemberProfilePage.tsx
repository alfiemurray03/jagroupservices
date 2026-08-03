import { Helmet } from '@dr.pogodin/react-helmet';
import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  Globe,
  Mail,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import type { TeamMember } from '@/data/team-members';

interface TeamMemberProfilePageProps {
  member: TeamMember;
}

export default function TeamMemberProfilePage({ member }: TeamMemberProfilePageProps) {
  const url = `https://jagroupservices.co.uk/team/${member.slug}`;
  const primaryRole = member.roles[0];
  const description = `${member.name}: ${member.roles.join('; ')}.`;

  return (
    <>
      <Helmet>
        <title>{member.name} – {primaryRole} | JA Group Services Ltd</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={`${member.name} – ${primaryRole}`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <main className="min-h-screen bg-background py-10 text-foreground sm:py-14 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
            className="overflow-hidden rounded-[2rem] border border-border bg-card text-card-foreground shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr]">
              <div className="relative flex min-h-[410px] flex-col overflow-hidden bg-gradient-to-br from-[#071a38] via-[#12366f] to-[#2563EB] p-8 text-white lg:min-h-[720px] lg:p-10">
                <div className="pointer-events-none absolute -right-20 -top-16 h-72 w-72 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-white/5" />
                <div className="pointer-events-none absolute left-10 top-1/2 h-px w-32 bg-gradient-to-r from-white/30 to-transparent" />

                <div className="relative">
                  <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-100">
                    Leadership profile
                  </span>
                </div>

                <div className="relative my-auto py-12 text-center">
                  <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-[2.25rem] border border-white/20 bg-white/10 text-5xl font-extrabold tracking-tight text-white shadow-2xl backdrop-blur-sm">
                    {member.monogram}
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                    {member.leadershipLabel}
                  </p>
                  <h1 className="mt-3 text-2xl font-bold leading-tight text-white">{member.name}</h1>
                </div>

                <div className="relative rounded-2xl border border-white/10 bg-black/10 p-4 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Organisations</p>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-white/85">{member.company}</p>
                </div>
              </div>

              <div className="p-7 sm:p-10 lg:p-12">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Formal appointments</p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl">
                    Roles and responsibilities
                  </h2>
                  <div className="mt-6 space-y-3">
                    {member.roles.map((role, roleIndex) => (
                      <div
                        key={role}
                        className={
                          roleIndex === 0
                            ? 'rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 font-semibold text-primary'
                            : 'rounded-2xl border border-border bg-muted/40 px-4 py-3 font-medium text-foreground'
                        }
                      >
                        {role}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-9 border-t border-border pt-8">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-card-foreground">Professional profile</h2>
                  </div>
                  <div className="space-y-4">
                    {member.profile.map((paragraph) => (
                      <p key={paragraph} className="leading-relaxed text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-9 border-t border-border pt-8">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-card-foreground">Leadership remit</h2>
                  </div>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {member.areas.map((area) => (
                      <li key={area} className="flex items-start gap-3 rounded-2xl border border-border bg-muted/30 p-4 text-sm leading-relaxed text-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-9 border-t border-border pt-8">
                  <h2 className="mb-5 text-xl font-bold text-card-foreground">Direct contact</h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <a
                      href={`tel:${member.phoneHref}`}
                      className="flex min-h-14 items-center gap-3 rounded-2xl border border-border bg-muted/30 px-4 text-sm text-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Telephone</p>
                        <p className="font-semibold">{member.phone}</p>
                      </div>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex min-h-14 items-center gap-3 rounded-2xl border border-border bg-muted/30 px-4 text-sm text-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">Email</p>
                        <p className="truncate font-semibold">{member.email}</p>
                      </div>
                    </a>
                  </div>

                  <a
                    href={`https://${member.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex min-h-14 items-center gap-3 rounded-2xl border border-border bg-muted/30 px-4 text-sm text-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Globe className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Website</p>
                      <p className="font-semibold">{member.website}</p>
                    </div>
                  </a>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="min-h-11 flex-1">
                    <a href={`mailto:${member.email}`}>Contact {member.firstName}</a>
                  </Button>
                  <Button asChild variant="outline" className="min-h-11 flex-1">
                    <Link to="/meet-the-team">View all leadership profiles</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </main>
    </>
  );
}
