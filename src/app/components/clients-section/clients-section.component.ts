import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoCarouselComponent, LogoItem } from '../logo-carousel/logo-carousel.component';

const recentlyAcquiredClients: LogoItem[] = [
  { name: 'SJ Contracts' },
  { name: 'Vascon Group' },
  { name: 'EKA Mobility' },
  { name: 'Alliance Group - Oman' },
  { name: 'Yashada Reality' },
  { name: 'Tirth IT Park' },
  { name: 'Co Creators and Company' },
  { name: 'Pinnacle Industries' },
  { name: 'Chinmay Ashram - Lohagao' },
  { name: 'Kumar Puram' },
  { name: 'PRM Software Solution, Pune & Nagar' },
  { name: 'Delta' },
];

const proudClients: LogoItem[] = [
  { name: 'ISRO' },
  { name: 'AFMC', logoUrl: 'https://www.google.com/s2/favicons?domain=afmc.gov.in&sz=128' },
  { name: 'Cantonment Boards' },
  { name: 'Ammunition Factory' },
  { name: 'DRDO' },
  { name: 'PMC' },
  { name: 'PCMC' },
];

const clients: LogoItem[] = [
  { name: 'Ojasvit', logoUrl: 'assets/ojasvit.png' },
  { name: 'Kool Homes', logoUrl: 'assets/kool homes.png' },
  { name: 'Amanora Town Centre', logoUrl: 'assets/amanora town center.png' },
  { name: 'Phoenix MarketCity', logoUrl: 'assets/phoenix market city.png' },
  { name: 'LIC', logoUrl: 'assets/LIC.png' },
  { name: 'Ashok Leyland', logoUrl: 'assets/ashok leyland.png' },
  { name: 'Nyati Group', logoUrl: 'assets/nyati.png' },
  { name: 'Frankfinn Institute', logoUrl: 'assets/frankfinn.png' },
  { name: 'TEA VILLA CAFÉ', logoUrl: 'assets/Tea Villa cage.png' },
  { name: 'Royal Properties', logoUrl: 'assets/royal properties.png' },
  { name: 'DigitalZone', logoUrl: 'assets/digital zone.png' },
  { name: 'BIOENABLE', logoUrl: 'assets/BIOENABLE.png' },
  { name: 'PanditAuto', logoUrl: 'assets/Pandit auto.png' },
  { name: 'Toscana Homes', logoUrl: 'assets/toscana.png' },
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
  recentlyAcquiredClients = recentlyAcquiredClients;
  proudClients = proudClients;
}
