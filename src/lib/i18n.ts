export type Locale = 'en';

export type Dictionary = Record<string, string>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  switch (locale) {
    case 'en':
    default:
      return (await import('../../messages/en.json')).default;
  }
}
