import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Scene3DComponent } from '../../components/scene3d/scene3d.component';
import { LucideAngularModule } from 'lucide-angular';

const roles = [
  { icon: 'camera', title: 'CCTV & Security System Technician' },
  { icon: 'wifi', title: 'Network Engineer' },
  { icon: 'users', title: 'Sales Executive' },
  { icon: 'headphones', title: 'Technical Support' },
];

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, Scene3DComponent, LucideAngularModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss',
})
export class CareersComponent {
  roles = roles;
}
