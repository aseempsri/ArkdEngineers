import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

const contactInfo = [
  { icon: 'map-pin', text: 'ARKD Engineers HQ' },
  { icon: 'phone', text: '+1 (555) 123-4567' },
  { icon: 'mail', text: 'info@arkdengineers.com' },
];

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
  contactInfo = contactInfo;
  submitted = signal(false);

  getContactIconName(item: (typeof contactInfo)[number]) {
    return item.icon;
  }

  onSubmit(e: Event) {
    e.preventDefault();
    this.submitted.set(true);
  }
}
