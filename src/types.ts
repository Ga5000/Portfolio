export type Theme = 'light' | 'dark' | 'system';

export const categories = ["All", "Back-end Development", "Coding", "Networks", "CyberSecurity", "Languages", "Cloud", "Relevant Only"] as const;
export type CategoryType = typeof categories[number];
