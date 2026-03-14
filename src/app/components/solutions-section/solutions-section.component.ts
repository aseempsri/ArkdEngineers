import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { LucideAngularModule } from 'lucide-angular';
import { AnimateInViewDirective } from '../../directives/animate-in-view.directive';

const solutions = [
  {
    icon: 'landmark',
    title: 'Public Service',
    description: 'Government buildings, transportation hubs, and public infrastructure security with scalable, centralized monitoring systems.',
    features: ['Centralized Monitoring', 'Mass Surveillance', 'Emergency Response'],
  },
  {
    icon: 'building',
    title: 'Enterprise',
    description: 'End-to-end corporate security solutions including access control, visitor management, and integrated smart building systems.',
    features: ['Access Control', 'Visitor Management', 'Smart Building'],
  },
  {
    icon: 'user',
    title: 'Personal',
    description: 'Home security, smart locks, personal biometric devices, and mobile-first security management for individuals.',
    features: ['Smart Home', 'Personal Devices', 'Mobile Security'],
  },
];

@Component({
  selector: 'app-solutions-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, AnimateInViewDirective],
  templateUrl: './solutions-section.component.html',
  styleUrl: './solutions-section.component.scss',
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
        animate('700ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class SolutionsSectionComponent {
  solutions = solutions;
  inView = signal(false);

  onInView(visible: boolean) {
    this.inView.set(visible);
  }

  getSolutionIconName(s: (typeof solutions)[number]) {
    return s.icon;
  }
}
