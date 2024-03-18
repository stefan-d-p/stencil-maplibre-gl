import { newSpecPage } from '@stencil/core/testing';
import { MarkerItem } from '../marker-item';

describe('marker-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MarkerItem],
      html: `<marker-item></marker-item>`,
    });
    expect(page.root).toEqualHtml(`
      <marker-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </marker-item>
    `);
  });
});
