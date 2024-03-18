import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'map-container',
  styleUrl: 'map-container.css',
  shadow: true,
})
export class MapContainer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
