import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

const services = [
  {
    icon: 'camera',
    title: 'CCTV Surveillance System',
    description: 'Dome, Bullet, PTZ, Wireless, IP Cameras, PIR Detection, Fisheye — comprehensive visual monitoring for any environment.',
    gradient: 'from-primary to-blue-400',
  },
  {
    icon: 'fingerprint',
    title: 'Access Control System',
    description: 'Face Recognition, Fingerprint, RFID, Boom Barriers. Conventional and biometric access control for secure entry management.',
    gradient: 'from-accent to-teal-400',
  },
  {
    icon: 'home',
    title: 'Home Automation',
    description: 'Smart lighting, HVAC control, video door phones. Operate lights and appliances with one button — control from anywhere.',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    icon: 'flame',
    title: 'Fire Safety',
    description: 'Conventional & addressable fire alarm systems, smoke detectors, hydrants. Very early smoke detection aspiration systems.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: 'eye',
    title: 'Intrusion Detection',
    description: 'Motion sensors, burglar alarms, industrial perimeter security. Protect your premises with intelligent detection systems.',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: 'navigation',
    title: 'GPS Tracking System',
    description: 'Real-time vehicle tracking for authorized personnel. Monitor fleet location and optimize logistics.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: 'school',
    title: 'Smart School Management',
    description: 'Digital podiums for international-level presentations. Interactive whiteboards and smart education solutions.',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: 'hospital',
    title: 'Hospital Management',
    description: 'Infant security, baby footprint identification. Newborn footprint matching for parent verification.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: 'monitor',
    title: 'Digital Signages & Displays',
    description: 'Commercial displays for retail, corporate, and public spaces. Slim depth, narrow bezel — modern digital signage.',
    gradient: 'from-slate-500 to-gray-600',
  },
  {
    icon: 'radio',
    title: 'Public Address System',
    description: 'Ceiling speakers, microphones, wall speakers, amplifiers. Complete PA solutions for announcements and broadcasting.',
    gradient: 'from-amber-500 to-orange-500',
  },
];

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
})
export class ServicesSectionComponent {
  services = services;

  getServiceIconName(s: (typeof services)[number]) {
    return s.icon;
  }
}
