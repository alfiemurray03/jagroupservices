import { Children, cloneElement, isValidElement } from 'react';
import type { ReactElement, ReactNode } from 'react';
import { CheckCircle2, ExternalLink, Globe2, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

import { Button } from '@/components/ui/button';
import OriginalHomePage from './index';

type ElementProps = {
  className?: string;
  children?: ReactNode;
};

function SousaMurrayELearningPortfolioCard() {
  const highlights = [
    'Authorised third-party e-learning courses',
    'Learner enrolment administration',
    'First-line learner and access support',
  ] as const;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.42, delay: 0.18 }}
      className="flex h-full flex-col rounded-2xl border border-border bg-card text-card-foreground shadow-sm"
    >
      <div className="border-b border-border p-6">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
              Authorised e-learning reseller services
            </p>
            <h3 className="mt-2 text-2xl font-bold text-card-foreground">Sousa Murray eLearning</h3>
          </div>
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="leading-relaxed text-muted-foreground">
          An authorised third-party e-learning reseller and learner-administration brand operated by JA Group Services Ltd. The relevant provider remains responsible for its course content, assessment and certification arrangements.
        </p>
        <ul className="mt-5 space-y-2.5">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Button
          asChild
          variant="outline"
          className="mt-7 min-h-11 w-full border-border font-semibold text-foreground hover:border-primary hover:bg-primary/10 hover:text-primary"
        >
          <a href="https://sousamurrayelearning.jagroupservices.co.uk/" target="_blank" rel="noopener noreferrer">
            Visit Sousa Murray eLearning
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </motion.article>
  );
}

function SousaMurraySitesPortfolioCard() {
  const highlights = [
    'Managed website design and construction',
    'Website maintenance and content updates',
    'Managed support from JA Group Services Ltd',
  ] as const;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.42, delay: 0.24 }}
      className="flex h-full flex-col rounded-2xl border border-border bg-card text-card-foreground shadow-sm"
    >
      <div className="border-b border-border p-6">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
              Managed Website Services
            </p>
            <h3 className="mt-2 text-2xl font-bold text-card-foreground">Sousa Murray Sites</h3>
          </div>
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <Globe2 className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="leading-relaxed text-muted-foreground">
          The approved brand for Managed Website Services designed, built, maintained or managed directly by JA Group Services Ltd. The service is still being built and has not yet launched.
        </p>
        <ul className="mt-5 space-y-2.5">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Button
          type="button"
          variant="outline"
          disabled
          className="mt-7 min-h-11 w-full border-border font-semibold"
        >
          Coming soon
        </Button>
      </div>
    </motion.article>
  );
}

function addSousaMurrayBrandsToPortfolio(node: ReactNode): ReactNode {
  if (!isValidElement<ElementProps>(node)) return node;

  // Preserve Button's single child exactly. Rebuilding an `asChild` Button
  // converts its anchor into an array and prevents the original card buttons
  // from rendering correctly.
  if (node.type === Button) return node;

  const { className, children } = node.props;
  const updatedChildren = Children.map(children, addSousaMurrayBrandsToPortfolio);
  const isPortfolioGrid =
    typeof className === 'string' && className.includes('grid gap-6 lg:grid-cols-3');

  if (isPortfolioGrid) {
    return cloneElement(
      node,
      {
        className: className.replace(
          'grid gap-6 lg:grid-cols-3',
          'grid gap-6 md:grid-cols-2 xl:grid-cols-3'
        ),
      },
      updatedChildren,
      <SousaMurrayELearningPortfolioCard key="sousa-murray-elearning" />,
      <SousaMurraySitesPortfolioCard key="sousa-murray-sites" />
    );
  }

  return cloneElement(node, undefined, updatedChildren);
}

export default function HomePageWithSousaMurrayBrands(): ReactElement {
  return addSousaMurrayBrandsToPortfolio(OriginalHomePage()) as ReactElement;
}
