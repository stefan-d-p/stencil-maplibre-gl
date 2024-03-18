import { newSpecPage } from '@stencil/core/testing';
import { MapContainer } from '../map-container';

describe('map-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MapContainer],
      html: `<map-container></map-container>`,
    });
    expect(page.root).toEqualHtml(`
      <map-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </map-container>
    `);
  });
});
