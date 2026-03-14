import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoCarouselComponent, LogoItem } from '../logo-carousel/logo-carousel.component';

const brands: LogoItem[] = [
  { name: 'Optex', logoUrl: 'https://www.google.com/s2/favicons?domain=optex.co.jp&sz=128' },
  { name: 'Samsung', logoUrl: 'https://www.google.com/s2/favicons?domain=samsung.com&sz=128' },
  { name: 'Securico', logoUrl: 'https://www.google.com/s2/favicons?domain=securico.com&sz=128' },
  { name: 'Panasonic', logoUrl: 'https://www.google.com/s2/favicons?domain=panasonic.com&sz=128' },
  { name: 'Honeywell', logoUrl: 'https://www.google.com/s2/favicons?domain=honeywell.com&sz=128' },
  { name: 'Bosch', logoUrl: 'https://www.google.com/s2/favicons?domain=bosch.com&sz=128' },
  { name: 'Axis Communications', logoUrl: 'https://www.google.com/s2/favicons?domain=axis.com&sz=128' },
  { name: 'D-Link', logoUrl: 'https://www.google.com/s2/favicons?domain=dlink.com&sz=128' },
  { name: 'eSSL', logoUrl: 'https://www.google.com/s2/favicons?domain=essl.com&sz=128' },
  { name: 'ACTi', logoUrl: 'https://www.google.com/s2/favicons?domain=acti.com&sz=128' },
  { name: 'Dahua Technology', logoUrl: 'https://www.google.com/s2/favicons?domain=dahuasecurity.com&sz=128' },
  { name: 'Bioenable', logoUrl: 'https://www.google.com/s2/favicons?domain=bioenable.com&sz=128' },
  { name: 'CP PLUS', logoUrl: 'https://www.google.com/s2/favicons?domain=cpplusworld.com&sz=128' },
  { name: 'Commax', logoUrl: 'https://www.google.com/s2/favicons?domain=commax.com&sz=128' },
  { name: 'HID', logoUrl: 'https://www.google.com/s2/favicons?domain=hidglobal.com&sz=128' },
  { name: 'Globus Infocom', logoUrl: 'https://www.google.com/s2/favicons?domain=globusinfocom.com&sz=128' },
  { name: 'Fike', logoUrl: 'https://www.google.com/s2/favicons?domain=fike.com&sz=128' },
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
