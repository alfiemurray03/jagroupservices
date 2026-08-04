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
  'We operate online services for individuals and organisations, including Profile Centre, Planyx and JA Domain Hub. These services have different purposes, but they are supported through a common approach to customer administration, governance, data protection and service management.':
    'We operate online services for individuals and organisations, including Profile Centre, Planyx, Aptenvo and JA Domain Hub. These services have different purposes, but they are supported through a common approach to customer administration, governance, data protection, safeguarding and service management.',
  'Platforms and division': 'Brands and divisions',
  'Read about our services': 'Read about our brands and services',
};

function AptenvoSummary() {
  return (
    <div className="rounded-xl border border-border bg-secondary/70 p-4">
      <p className="font-bold text-card-foreground">Aptenvo</p>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        An online learning and training brand providing selected eLearning courses through approved external training providers.
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
      (child) => isValidElement<ElementProps>(child) && child.props.name === 'Profile Centre'
    );

  if (isServiceSummaryList) {
    return cloneElement(node, undefined, updatedChildren, <AptenvoSummary key="aptenvo" />);
  }

  if (node.props.children === undefined) return node;
  return cloneElement(node, undefined, updatedChildren);
}

export default function AboutUsPageWithAptenvo(): ReactElement {
  return enhanceAboutUs(OriginalAboutUsPage()) as ReactElement;
}
