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
                <p class="text-base sm:text-lg font-semibold text-foreground leading-relaxed mb-6" style="font-family: 'Inter', sans-serif">Empowering a smarter and safer world through innovative technology.</p>
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

      <!-- WhatsApp floating button -->
      <a
        href="https://wa.me/918329699042"
        target="_blank"
        rel="noopener noreferrer"
        class="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/40 hover:scale-110 hover:shadow-xl hover:shadow-primary/50 transition-all duration-300"
        aria-label="Chat on WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  `,
})
export class IndexComponent implements AfterViewInit {
  private readonly lenis = inject(LenisService);

  ngAfterViewInit(): void {
    requestAnimationFrame(() => this.lenis.resize());
  }
}
