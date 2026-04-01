import { BrandConfig } from '../brand';

describe('BrandConfig', () => {
  it('exports the correct primary color', () => {
    expect(BrandConfig.colors.primary).toBe('#1e2330');
  });

  it('exports the correct gray color', () => {
    expect(BrandConfig.colors.gray).toBe('#818181');
  });

  it('exports the correct accent color', () => {
    expect(BrandConfig.colors.accent).toBe('#FFA500');
  });

  it('exports the correct heading font', () => {
    expect(BrandConfig.fonts.heading).toBe('SQMarket-Medium, sans-serif');
  });

  it('exports the correct body font', () => {
    expect(BrandConfig.fonts.body).toBe('Arial, Helvetica, sans-serif');
  });
});
