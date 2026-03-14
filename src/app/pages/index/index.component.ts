import { Component, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LenisService } from '../../services/lenis.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { FounderSectionComponent } from '../../components/founder-section/founder-section.component';
import { ServicesSectionComponent } from '../../components/services-section/services-section.component';
import { SolutionsSectionComponent } from '../../components/solutions-section/solutions-section.component';
import { WhyChooseSectionComponent } from '../../components/why-choose-section/why-choose-section.component';
import { BenefitsSectionComponent } from '../../components/benefits-section/benefits-section.component';
import { ClientsSectionComponent } from '../../components/clients-section/clients-section.component';
import { BrandsSectionComponent } from '../../components/brands-section/brands-section.component';
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Scene3DComponent } from '../../components/scene3d/scene3d.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    FounderSectionComponent,
    ServicesSectionComponent,
    SolutionsSectionComponent,
    WhyChooseSectionComponent,
    BenefitsSectionComponent,
    ClientsSectionComponent,
    BrandsSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    Scene3DComponent,
  ],
  template: `
    <div class="relative min-h-screen overflow-x-hidden">
      <!-- 3D Background - fixed behind everything -->
      <div class="fixed inset-0 z-0">
        <app-scene3d />
      </div>

      <!-- Content overlay -->
      <div class="relative z-10">
        <app-navbar />
        <app-hero-section />
        <div class="relative bg-gradient-to-b from-transparent via-background/80 to-background">
          <app-about-section />
          <app-founder-section />
          <app-services-section />
          <app-solutions-section />
          <app-why-choose-section />
          <app-benefits-section />
          <app-clients-section />
          <app-brands-section />
          <app-contact-section />
          <app-footer />
        </div>
      </div>
    </div>
  `,
})
export class IndexComponent implements AfterViewInit {
  private readonly lenis = inject(LenisService);

  ngAfterViewInit(): void {
    requestAnimationFrame(() => this.lenis.resize());
  }
}
