import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

const reasons = [
  { icon: 'award', title: '15+ Years Experience', desc: 'Deep expertise in security industry' },
  { icon: 'building-2', title: 'Trusted by Government & Corporate', desc: 'Proven track record with major clients' },
  { icon: 'shield', title: 'Certified Quality Equipment', desc: 'High-grade security systems' },
  { icon: 'wrench', title: 'Professional Installation', desc: 'Expert team for seamless deployment' },
  { icon: 'check-circle2', title: 'Strong After-Sales Support', desc: 'Dedicated service and maintenance' },
  { icon: 'cpu', title: 'Customized Design', desc: 'Tailored security system solutions' },
];

@Component({
  selector: 'app-why-choose-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './why-choose-section.component.html',
  styleUrl: './why-choose-section.component.scss',
})
export class WhyChooseSectionComponent {
  reasons = reasons;
}
