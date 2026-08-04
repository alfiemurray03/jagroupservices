import { Children, cloneElement, isValidElement } from 'react';
import type { ReactElement, ReactNode } from 'react';
import { CheckCircle2, ExternalLink, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

import { Button } from '@/components/ui/button';
import OriginalHomePage from './index';

type ElementProps = {
  className?: string;
  children?: ReactNode;
};

function AptenvoPortfolioCard() {
  const highlights = [
    'Online and eLearning courses',
    'Adult and organisation enrolments',
    'Aptenvo first-line learner support',
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
              Online learning and training
            </p>
            <h3 className="mt-2 text-2xl font-bold text-card-foreground">Aptenvo</h3>
          </div>
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="leading-relaxed text-muted-foreground">
          An online learning brand providing selected eLearning courses through approved training providers, with Aptenvo managing the customer journey, enrolment and first-line support.
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
          <a href="https://aptenvo.jagroupservices.co.uk/" target="_blank" rel="noopener noreferrer">
            Visit Aptenvo
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </motion.article>
  );
}

function addAptenvoToPortfolio(node: ReactNode): ReactNode {
  if (!isValidElement<ElementProps>(node)) return node;

  const { className, children } = node.props;
  const updatedChildren = Children.map(children, addAptenvoToPortfolio);
  const isPortfolioGrid =
    typeof className === 'string' && className.includes('grid gap-6 lg:grid-cols-3');

  if (isPortfolioGrid) {
    return cloneElement(
      node,
      {
        className: className.replace(
          'grid gap-6 lg:grid-cols-3',
          'grid gap-6 md:grid-cols-2 xl:grid-cols-4'
        ),
      },
      updatedChildren,
      <AptenvoPortfolioCard key="aptenvo" />
    );
  }

  return cloneElement(node, undefined, updatedChildren);
}

export default function HomePageWithAptenvo(): ReactElement {
  return addAptenvoToPortfolio(OriginalHomePage()) as ReactElement;
}
