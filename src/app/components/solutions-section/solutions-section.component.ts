import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

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
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './solutions-section.component.html',
  styleUrl: './solutions-section.component.scss',
})
export class SolutionsSectionComponent {
  solutions = solutions;

  getSolutionIconName(s: (typeof solutions)[number]) {
    return s.icon;
  }
}
