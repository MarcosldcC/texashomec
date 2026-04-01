import { LocalBusiness } from '../schema';

describe('LocalBusiness schema', () => {
  it('has @type LocalBusiness', () => {
    expect(LocalBusiness['@type']).toBe('LocalBusiness');
  });

  it('has @context schema.org', () => {
    expect(LocalBusiness['@context']).toBe('https://schema.org');
  });

  it('has a name', () => {
    expect(typeof LocalBusiness.name).toBe('string');
    expect(LocalBusiness.name.length).toBeGreaterThan(0);
  });
});
