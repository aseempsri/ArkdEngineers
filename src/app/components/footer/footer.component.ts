import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  logoUrl = 'assets/arkd_logo.png';
  navItems = ['Home', 'About', 'Services', 'Solutions', 'Contact'];
  currentYear = new Date().getFullYear();
}
