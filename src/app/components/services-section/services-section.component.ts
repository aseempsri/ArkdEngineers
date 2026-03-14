import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { LucideAngularModule } from 'lucide-angular';
import { AnimateInViewDirective } from '../../directives/animate-in-view.directive';

const services = [
  {
    icon: 'camera',
    title: 'CCTV Systems',
    description: 'Advanced surveillance with AI-powered analytics, night vision, and real-time monitoring for comprehensive security coverage.',
    gradient: 'from-primary to-blue-400',
  },
  {
    icon: 'fingerprint',
    title: 'Biometric Recognition',
    description: 'State-of-the-art fingerprint, facial, and iris recognition systems for foolproof identity verification.',
    gradient: 'from-accent to-teal-400',
  },
  {
    icon: 'door-open',
    title: 'Smart Entrance',
    description: 'Intelligent access control systems with automated gates, turnstiles, and barrier management solutions.',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: 'monitor',
    title: 'Smart Office',
    description: 'Transform your workspace with IoT-enabled office automation, attendance tracking, and environment controls.',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    icon: 'shield',
    title: 'Identity Auth',
    description: 'Multi-factor authentication systems combining biometric, card-based, and PIN verification for maximum security.',
    gradient: 'from-primary to-accent',
  },
  {
    icon: 'cpu',
    title: 'AI Integration',
    description: 'Machine learning powered threat detection, behavioral analysis, and predictive security intelligence.',
    gradient: 'from-indigo-400 to-cyan-400',
  },
];

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, AnimateInViewDirective],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('cardUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class ServicesSectionComponent {
  services = services;
  inView = signal(false);

  onInView(visible: boolean) {
    this.inView.set(visible);
  }

  getServiceIconName(s: (typeof services)[number]) {
    return s.icon;
  }
}
