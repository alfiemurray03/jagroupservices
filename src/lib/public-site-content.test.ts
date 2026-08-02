import { describe, expect, it } from 'vitest';

import { supportedLanguages } from './i18n';
import { publicPageList, type LocalisedText } from './public-site-content';

function expectComplete(value: LocalisedText, label: string) {
  for (const language of supportedLanguages) {
    expect(value[language], `${label} is missing ${language}`).toBeTypeOf('string');
    expect(value[language].trim(), `${label} is empty for ${language}`).not.toBe('');
  }
}

describe('public website content', () => {
  it('contains every required public page', () => {
    const required = [
      'home',
      'about',
      'brands',
      'structure',
      'partner',
      'contact',
      'trust',
      'support',
      'status',
      'announcements',
      'former-services',
      'terms',
      'privacy',
      'cookies',
      'complaints',
      'ip',
      'accessibility',
      'security',
      'affiliate',
      'sitemap',
    ];

    expect(publicPageList.map((page) => page.id)).toEqual(expect.arrayContaining(required));
  });

  it('uses unique canonical paths', () => {
    const paths = publicPageList.map((page) => page.path);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it('has a complete translation in every supported language', () => {
    for (const page of publicPageList) {
      expectComplete(page.title, `${page.id}.title`);
      expectComplete(page.eyebrow, `${page.id}.eyebrow`);
      expectComplete(page.summary, `${page.id}.summary`);
      expectComplete(page.description, `${page.id}.description`);
      if (page.status) expectComplete(page.status, `${page.id}.status`);

      expect(page.sections.length, `${page.id} has no sections`).toBeGreaterThan(0);
      page.sections.forEach((section, sectionIndex) => {
        expectComplete(section.heading, `${page.id}.sections[${sectionIndex}].heading`);
        section.paragraphs?.forEach((paragraph, paragraphIndex) => {
          expectComplete(paragraph, `${page.id}.sections[${sectionIndex}].paragraphs[${paragraphIndex}]`);
        });
        section.bullets?.forEach((bullet, bulletIndex) => {
          expectComplete(bullet, `${page.id}.sections[${sectionIndex}].bullets[${bulletIndex}]`);
        });
        section.links?.forEach((link, linkIndex) => {
          expectComplete(link.label, `${page.id}.sections[${sectionIndex}].links[${linkIndex}]`);
          expect(link.href.trim()).not.toBe('');
        });
      });
    }
  });

  it('makes all policy documents printable', () => {
    const policyIds = ['terms', 'privacy', 'cookies', 'complaints', 'ip', 'accessibility', 'security', 'affiliate'];
    for (const page of publicPageList.filter((item) => policyIds.includes(item.id))) {
      expect(page.printable, `${page.id} must be printable`).toBe(true);
      expect(page.effectiveDate, `${page.id} must show a review date`).toBeTruthy();
    }
  });
});
