import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoCarouselComponent, LogoItem } from '../logo-carousel/logo-carousel.component';

const brands: LogoItem[] = [
  { name: 'Optex', logoUrl: 'assets/optex.png' },
  { name: 'Samsung', logoUrl: 'assets/samsung.png' },
  { name: 'Securico', logoUrl: 'assets/securico.png' },
  { name: 'Panasonic', logoUrl: 'assets/Panasonic.png' },
  { name: 'Honeywell', logoUrl: 'assets/honeywell.png' },
  { name: 'Bosch', logoUrl: 'assets/bosch.png' },
  { name: 'Axis Communications', logoUrl: 'assets/axis communication.png' },
  { name: 'D-Link', logoUrl: 'assets/d link.png' },
  { name: 'eSSL', logoUrl: 'assets/essl.png' },
  { name: 'ACTi', logoUrl: 'assets/acti.png' },
  { name: 'Dahua Technology', logoUrl: 'assets/dahua.png' },
  { name: 'Bioenable', logoUrl: 'assets/BIOENABLE.png' },
  { name: 'CP PLUS', logoUrl: 'assets/cp plus.png' },
  { name: 'Commax', logoUrl: 'assets/commax.png' },
  { name: 'HID', logoUrl: 'assets/HID_Global_logo.svg.png' },
  { name: 'Globus Infocom', logoUrl: 'assets/globus.png' },
  { name: 'Fike', logoUrl: 'assets/fike.png' },
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
