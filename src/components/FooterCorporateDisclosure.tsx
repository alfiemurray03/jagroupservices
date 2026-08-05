import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function FooterCorporateDisclosure() {
  const [footerElement, setFooterElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const footer = document.querySelector<HTMLElement>('footer[role="contentinfo"]');
    setFooterElement(footer);
  }, []);

  if (!footerElement) return null;

  return createPortal(
    <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
      <section
        aria-label="Corporate disclosure"
        className="border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground"
      >
        <p>JA Group Services Ltd is a member of the JSDS Group and is majority-owned by JSDS Group Ltd.</p>
        <p className="mt-2">
          Sousa Murray is the master brand of JA Group Services Ltd. Sousa Murray Domains, Sousa Murray Planeia, Sousa Murray Profiles and Sousa Murray eLearning are customer-facing brands operated by JA Group Services Ltd. Sousa Murray Sites is an approved forthcoming brand and has not yet launched. None of these brands is a separate legal entity.
        </p>
      </section>
    </div>,
    footerElement,
  );
}
