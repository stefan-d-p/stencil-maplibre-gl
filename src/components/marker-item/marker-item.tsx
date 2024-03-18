import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'marker-item',
  styleUrl: 'marker-item.css',
  shadow: true,
})
export class MarkerItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
