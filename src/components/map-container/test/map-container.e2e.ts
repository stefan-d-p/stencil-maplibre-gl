import { newE2EPage } from '@stencil/core/testing';

describe('map-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<map-container></map-container>');

    const element = await page.find('map-container');
    expect(element).toHaveClass('hydrated');
  });
});
