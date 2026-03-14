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
  { name: 'ISTRO' },
  { name: 'AFMC', logoUrl: 'https://www.google.com/s2/favicons?domain=afmc.gov.in&sz=128' },
  { name: 'Cantonment Boards' },
  { name: 'Ammunition Factory' },
  { name: 'DRDO' },
  { name: 'PMC' },
  { name: 'PCMC' },
];

const clients: LogoItem[] = [
  { name: 'Kool Homes', logoUrl: 'https://www.google.com/s2/favicons?domain=koolhomes.in&sz=128' },
  { name: 'Amanora Town Centre', logoUrl: 'https://www.google.com/s2/favicons?domain=amanoramall.com&sz=128' },
  { name: 'Phoenix MarketCity', logoUrl: 'https://www.google.com/s2/favicons?domain=phoenixmarketcity.com&sz=128' },
  { name: 'LIC', logoUrl: 'https://www.google.com/s2/favicons?domain=licindia.in&sz=128' },
  { name: 'Ashok Leyland', logoUrl: 'https://www.google.com/s2/favicons?domain=ashokleyland.com&sz=128' },
  { name: 'Nyati Group', logoUrl: 'https://www.google.com/s2/favicons?domain=nyatigroup.com&sz=128' },
  { name: 'Frankfinn Institute', logoUrl: 'https://www.google.com/s2/favicons?domain=frankfinn.com&sz=128' },
  { name: 'TEA VILLA CAFÉ', logoUrl: 'https://www.google.com/s2/favicons?domain=teavillacafe.com&sz=128' },
  { name: 'Royal Properties', logoUrl: 'https://www.google.com/s2/favicons?domain=royalpropertiesindia.com&sz=128' },
  { name: 'DigitalZone', logoUrl: 'https://www.google.com/s2/favicons?domain=digitalzone.in&sz=128' },
  { name: 'BIOENABLE', logoUrl: 'https://www.google.com/s2/favicons?domain=bioenable.com&sz=128' },
  { name: 'PanditAuto', logoUrl: 'https://www.google.com/s2/favicons?domain=panditauto.com&sz=128' },
  { name: 'Toscana Homes', logoUrl: 'https://www.google.com/s2/favicons?domain=toscanahomes.com&sz=128' },
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
