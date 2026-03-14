import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { LucideAngularModule } from 'lucide-angular';
import { AnimateInViewDirective } from '../../directives/animate-in-view.directive';

const stats = [
  { icon: 'building-2', value: 'Enterprise', label: 'Grade Solutions' },
  { icon: 'users', value: '1000+', label: 'Clients Served' },
  { icon: 'globe', value: 'Global', label: 'Reach' },
  { icon: 'award', value: 'Certified', label: 'ISO Standards' },
];

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, AnimateInViewDirective],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class AboutSectionComponent {
  stats = stats;
  inView = signal(false);

  onInView(visible: boolean) {
    this.inView.set(visible);
  }

  getStatIconName(stat: (typeof stats)[number]) {
    return stat.icon;
  }
}
