export const Language = {
  CZ: 'cz',
  EN: 'en',
  UA: 'ua',
} as const;

export type Language = (typeof Language)[keyof typeof Language];
