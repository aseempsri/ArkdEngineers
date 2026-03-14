import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('fadeUp40', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('1000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class HeroSectionComponent {
  stats = [
    { icon: 'shield', label: 'Smart Security', value: 'Enterprise' },
    { icon: 'eye', label: 'CCTV Systems', value: 'Advanced' },
    { icon: 'fingerprint', label: 'Biometric', value: 'AI-Powered' },
  ] as const;

  getStatIconName(stat: (typeof this.stats)[number]) {
    return stat.icon;
  }
}
