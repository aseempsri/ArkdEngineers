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
        <!-- Slogan banner -->
        <div class="relative z-10 py-12 sm:py-16 px-4">
          <div class="max-w-7xl mx-auto text-center">
            <p class="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight">
              <span class="relative inline-block px-8 py-4 rounded-2xl border-2 border-accent/60 bg-card/70 backdrop-blur-md shadow-[0_0_40px_hsl(195_90%_50%_/_0.12)] hover:shadow-[0_0_50px_hsl(195_90%_50%_/_0.2)] transition-all duration-300 hover:border-accent/80">
                <span class="text-foreground">Your Safety is our Profession</span>
              </span>
            </p>
          </div>
        </div>
        <div class="relative bg-gradient-to-b from-transparent via-background/80 to-background">
          <app-about-section />
          <!-- Vision & Core Values banner -->
          <div class="relative z-10 py-12 sm:py-16 px-4">
            <div class="max-w-7xl mx-auto text-center">
              <div class="relative inline-block px-8 sm:px-12 py-8 rounded-2xl border-2 border-accent/60 bg-card/70 backdrop-blur-md shadow-[0_0_40px_hsl(195_90%_50%_/_0.12)] hover:shadow-[0_0_50px_hsl(195_90%_50%_/_0.2)] transition-all duration-300 hover:border-accent/80 max-w-4xl">
                <p class="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3" style="font-family: 'Orbitron', sans-serif">Vision</p>
                <p class="text-base sm:text-lg font-semibold text-foreground leading-relaxed mb-6" style="font-family: 'Inter', sans-serif">Technology changes the world, and makes smarter and safer human living and social development.</p>
                <div class="h-px bg-border/60 my-6"></div>
                <p class="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3" style="font-family: 'Orbitron', sans-serif">Core Values</p>
                <p class="text-base sm:text-lg font-semibold text-foreground" style="font-family: 'Inter', sans-serif">Responsibility, Integrity, Sustainability, Excellence</p>
              </div>
            </div>
          </div>
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
