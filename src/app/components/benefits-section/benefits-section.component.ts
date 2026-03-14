import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

const benefits = [
  'Crime Prevention & Monitoring',
  'Controlled Access to Sensitive Areas',
  'Real-Time Surveillance & Remote Monitoring',
  'Protection of Assets & Infrastructure',
  'Improved Workplace Safety',
];

@Component({
  selector: 'app-benefits-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './benefits-section.component.html',
  styleUrl: './benefits-section.component.scss',
})
export class BenefitsSectionComponent {
  benefits = benefits;
}
