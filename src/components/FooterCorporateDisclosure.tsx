import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { useLanguage } from '@/components/LanguageProvider';
import { L, text } from '@/lib/public-site-content';

const disclosure = {
  label: L('Corporate disclosure', 'Datgeliad corfforaethol', 'Divulgação corporativa', 'Divulgación corporativa', 'Informations d’entreprise'),
  group: L(
    'JA Group Services Ltd is a member of the JSDS Group and is majority-owned by JSDS Group Ltd.',
    'Mae JA Group Services Ltd yn aelod o Grŵp JSDS ac mae JSDS Group Ltd yn berchen ar y mwyafrif ohono.',
    'A JA Group Services Ltd integra o JSDS Group e é detida maioritariamente pela JSDS Group Ltd.',
    'JA Group Services Ltd forma parte de JSDS Group y es propiedad mayoritaria de JSDS Group Ltd.',
    'JA Group Services Ltd appartient au JSDS Group et est détenue majoritairement par JSDS Group Ltd.'
  ),
  brands: L(
    'JA Group Services Ltd operates the brands Planyx, Profile Centre and JA Domain Hub. They are not separate legal entities.',
    'Mae JA Group Services Ltd yn gweithredu’r brandiau Planyx, Profile Centre a JA Domain Hub. Nid ydynt yn endidau cyfreithiol ar wahân.',
    'A JA Group Services Ltd opera as marcas Planyx, Profile Centre e JA Domain Hub. Não são entidades jurídicas separadas.',
    'JA Group Services Ltd opera las marcas Planyx, Profile Centre y JA Domain Hub. No son entidades jurídicas independientes.',
    'JA Group Services Ltd exploite les marques Planyx, Profile Centre et JA Domain Hub. Elles ne constituent pas des entités juridiques distinctes.'
  ),
};

export default function FooterCorporateDisclosure() {
  const [footerElement, setFooterElement] = useState<HTMLElement | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    setFooterElement(document.querySelector<HTMLElement>('footer[role="contentinfo"]'));
  }, []);

  if (!footerElement) return null;

  return createPortal(
    <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
      <section aria-label={text(disclosure.label, language)} className="border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
        <p>{text(disclosure.group, language)}</p>
        <p className="mt-2">{text(disclosure.brands, language)}</p>
      </section>
    </div>,
    footerElement,
  );
}
