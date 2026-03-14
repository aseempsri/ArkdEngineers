import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

const stats = [
  { icon: 'building-2', value: 'Enterprise', label: 'Grade Solutions' },
  { icon: 'users', value: '1000+', label: 'Clients Served' },
  { icon: 'globe', value: 'Global', label: 'Reach' },
  { icon: 'award', value: 'Certified', label: 'ISO Standards' },
];

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
})
export class AboutSectionComponent {
  stats = stats;

  getStatIconName(stat: (typeof stats)[number]) {
    return stat.icon;
  }
}
