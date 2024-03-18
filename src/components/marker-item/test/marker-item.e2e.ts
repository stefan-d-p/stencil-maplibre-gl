import { newE2EPage } from '@stencil/core/testing';

describe('marker-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<marker-item></marker-item>');

    const element = await page.find('marker-item');
    expect(element).toHaveClass('hydrated');
  });
});
