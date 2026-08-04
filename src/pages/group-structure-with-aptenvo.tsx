import { Children, cloneElement, isValidElement } from 'react';
import type { ReactElement, ReactNode } from 'react';

import OriginalGroupStructurePage from './our-group-structure';

type ElementProps = {
  asChild?: boolean;
  children?: ReactNode;
  [key: string]: unknown;
};

const textReplacements: Record<string, string> = {
  'JA Group Services Ltd develops, operates and manages digital platforms and customer services.':
    'JA Group Services Ltd develops, operates and manages digital platforms and customer services, including Profile Centre, Planyx, Aptenvo and JA Domain Hub.',
  'The Company manages its platforms, operating brands, partnerships and central support functions.':
    'The Company manages Profile Centre, Planyx, Aptenvo, JA Domain Hub, partnerships and central support functions.',
  'An active private limited company incorporated in England and Wales. It develops, operates and manages digital platforms and customer services, combining its own technology, central support functions and selected partner services.':
    'An active private limited company incorporated in England and Wales. It develops, operates and manages Profile Centre, Planyx, Aptenvo, JA Domain Hub and other digital services, combining its own technology, central support functions and selected partner services.',
  'The Company manages customer services, digital platforms, commercial relationships and central operational functions.':
    'The Company manages customer services, Profile Centre, Planyx, Aptenvo, JA Domain Hub, commercial relationships and central operational functions.',
};

function enhanceGroupStructure(node: ReactNode): ReactNode {
  if (typeof node === 'string') return textReplacements[node] ?? node;
  if (!isValidElement<ElementProps>(node)) return node;

  const replacementProps: Partial<ElementProps> = {};
  Object.entries(node.props).forEach(([key, value]) => {
    if (typeof value === 'string' && textReplacements[value]) {
      replacementProps[key] = textReplacements[value];
    }
  });

  if (node.props.asChild || node.props.children === undefined) {
    return cloneElement(node, replacementProps);
  }

  return cloneElement(
    node,
    replacementProps,
    Children.map(node.props.children, enhanceGroupStructure)
  );
}

export default function GroupStructurePageWithAptenvo(): ReactElement {
  return enhanceGroupStructure(OriginalGroupStructurePage()) as ReactElement;
}
