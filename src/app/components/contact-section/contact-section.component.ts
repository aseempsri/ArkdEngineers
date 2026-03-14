import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { LucideAngularModule } from 'lucide-angular';
import { AnimateInViewDirective } from '../../directives/animate-in-view.directive';

const contactInfo = [
  { icon: 'map-pin', text: 'ARKD Engineers HQ' },
  { icon: 'phone', text: '+1 (555) 123-4567' },
  { icon: 'mail', text: 'info@arkdengineers.com' },
];

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule, AnimateInViewDirective],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-40px)' }),
        animate('700ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(40px)' }),
        animate('700ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class ContactSectionComponent {
  contactInfo = contactInfo;
  inView = signal(false);
  submitted = signal(false);

  onInView(visible: boolean) {
    this.inView.set(visible);
  }

  getContactIconName(item: (typeof contactInfo)[number]) {
    return item.icon;
  }

  onSubmit(e: Event) {
    e.preventDefault();
    this.submitted.set(true);
  }
}
