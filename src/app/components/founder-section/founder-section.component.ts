import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-founder-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './founder-section.component.html',
  styleUrl: './founder-section.component.scss',
})
export class FounderSectionComponent {}
