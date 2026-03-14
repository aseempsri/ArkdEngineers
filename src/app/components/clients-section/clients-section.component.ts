import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoCarouselComponent, LogoItem } from '../logo-carousel/logo-carousel.component';

const clients: LogoItem[] = [
  { name: 'Kool Homes' },
  { name: 'Amanora Town Centre' },
  { name: 'Phoenix MarketCity' },
  { name: 'AFMC' },
  { name: 'LIC' },
  { name: 'Ashok Leyland' },
  { name: 'Nyati Group' },
  { name: 'Frankfinn Institute' },
  { name: 'TEA VILLA CAFÉ' },
  { name: 'Royal Properties' },
  { name: 'DigitalZone' },
  { name: 'BIOENABLE' },
  { name: 'PanditAuto' },
  { name: 'Toscana Homes' },
];

@Component({
  selector: 'app-clients-section',
  standalone: true,
  imports: [CommonModule, LogoCarouselComponent],
  templateUrl: './clients-section.component.html',
  styleUrl: './clients-section.component.scss',
})
export class ClientsSectionComponent {
  clients = clients;
}
