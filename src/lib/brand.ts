export const BrandConfig = {
  colors: {
    primary: '#1e2330',
    gray: '#818181',
    accent: '#FFA500',
  },
  fonts: {
    heading: 'SQMarket-Medium, sans-serif',
    body: 'Arial, Helvetica, sans-serif',
  },
} as const;

export type BrandConfigType = typeof BrandConfig;
