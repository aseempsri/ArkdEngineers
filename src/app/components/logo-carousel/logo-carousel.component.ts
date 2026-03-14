import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface LogoItem {
  name: string;
  logoUrl?: string;
  domain?: string;
}

@Component({
  selector: 'app-logo-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-carousel.component.html',
  styleUrl: './logo-carousel.component.scss',
})
export class LogoCarouselComponent {
  @Input() items: LogoItem[] = [];

  getInitials(name: string): string {
    const words = name.split(/\s+/).filter(w => w.length > 0);
    if (words.length >= 2) {
      return (words[0][0] + words[words.length - 1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  }
}
