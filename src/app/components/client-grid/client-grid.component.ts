import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ClientItem {
  name: string;
  logoUrl?: string;
}

@Component({
  selector: 'app-client-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-grid.component.html',
  styleUrl: './client-grid.component.scss',
})
export class ClientGridComponent {
  @Input() items: ClientItem[] = [];
  @Input() categoryLabel = '';

  logoError: Record<string, boolean> = {};

  readonly LOGO_BG = '#1e6fbb'; // primary blue
  readonly LOGO_COLOR = '#ffffff';

  getLogoUrl(item: ClientItem): string {
    if (item.logoUrl) return item.logoUrl;
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&size=80&background=${this.LOGO_BG.replace('#', '')}&color=${this.LOGO_COLOR.replace('#', '')}&bold=true`;
  }

  getInitials(name: string): string {
    const words = name.split(/\s+/).filter((w) => w.length > 0);
    if (words.length >= 2) {
      return (words[0][0] + words[words.length - 1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  }
}
