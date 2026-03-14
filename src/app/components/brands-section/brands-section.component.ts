import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoCarouselComponent, LogoItem } from '../logo-carousel/logo-carousel.component';

const brands: LogoItem[] = [
  { name: 'Optex' },
  { name: 'Samsung' },
  { name: 'Securico' },
  { name: 'Panasonic' },
  { name: 'Honeywell' },
  { name: 'Bosch' },
  { name: 'Axis Communications' },
  { name: 'D-Link' },
  { name: 'eSSL' },
  { name: 'ACTi' },
  { name: 'Dahua Technology' },
  { name: 'Bioenable' },
  { name: 'CP PLUS' },
  { name: 'Commax' },
  { name: 'HID' },
  { name: 'Globus Infocom' },
  { name: 'Fike' },
];

@Component({
  selector: 'app-brands-section',
  standalone: true,
  imports: [CommonModule, LogoCarouselComponent],
  templateUrl: './brands-section.component.html',
  styleUrl: './brands-section.component.scss',
})
export class BrandsSectionComponent {
  brands = brands;
}
