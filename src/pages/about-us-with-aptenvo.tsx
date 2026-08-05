import { Children, cloneElement, isValidElement } from 'react';
import type { ReactElement, ReactNode } from 'react';

import OriginalAboutUsPage from './about-us';

type ElementProps = {
  asChild?: boolean;
  children?: ReactNode;
  className?: string;
  name?: string;
};

const textReplacements: Record<string, string> = {
  'We operate online services for individuals and organisations, including Sousa Murray Profiles, Sousa Murray Planeia and Sousa Murray Domains. These services have different purposes, but they are supported through a common approach to customer administration, governance, data protection and service management.':
    'JA Group Services Ltd operates the Sousa Murray master brand and its customer-facing brands: Sousa Murray Domains, Sousa Murray Planeia, Sousa Murray Profiles and Sousa Murray eLearning. Sousa Murray Sites is the approved forthcoming brand for Managed Website Services and has not yet launched.',
  'Platforms and division': 'Sousa Murray brands',
  'Read about our services': 'Read about the Sousa Murray brands',
};

function SousaMurrayELearningSummary() {
  return (
    <div className="rounded-xl border border-border bg-secondary/70 p-4">
      <p className="font-bold text-card-foreground">Sousa Murray eLearning</p>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        The authorised third-party e-learning reseller and learner-administration brand operated by JA Group Services Ltd.
      </p>
    </div>
  );
}

function SousaMurraySitesSummary() {
  return (
    <div className="rounded-xl border border-border bg-secondary/70 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-bold text-card-foreground">Sousa Murray Sites</p>
        <span className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-semibold text-muted-foreground">
          Coming soon
        </span>
      </div>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        The approved forthcoming brand for Managed Website Services designed, built, maintained or managed directly by JA Group Services Ltd. It has not yet launched.
      </p>
    </div>
  );
}

function enhanceAboutUs(node: ReactNode): ReactNode {
  if (typeof node === 'string') return textReplacements[node] ?? node;
  if (!isValidElement<ElementProps>(node)) return node;

  // Components using Radix Slot must retain their single child unchanged.
  if (node.props.asChild) return node;

  const originalChildren = Children.toArray(node.props.children);
  const updatedChildren = Children.map(node.props.children, enhanceAboutUs);
  const isServiceSummaryList =
    typeof node.props.className === 'string' &&
    node.props.className.includes('space-y-3') &&
    originalChildren.some(
      (child) => isValidElement<ElementProps>(child) && child.props.name === 'Sousa Murray Profiles'
    );

  if (isServiceSummaryList) {
    return cloneElement(
      node,
      undefined,
      updatedChildren,
      <SousaMurrayELearningSummary key="sousa-murray-elearning" />,
      <SousaMurraySitesSummary key="sousa-murray-sites" />
    );
  }

  if (node.props.children === undefined) return node;
  return cloneElement(node, undefined, updatedChildren);
}

export default function AboutUsPageWithSousaMurrayBrands(): ReactElement {
  return enhanceAboutUs(OriginalAboutUsPage()) as ReactElement;
}
