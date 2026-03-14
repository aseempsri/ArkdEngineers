import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Lenis from 'lenis';

@Injectable({ providedIn: 'root' })
export class LenisService {
  private readonly platformId = inject(PLATFORM_ID);
  private lenis: Lenis | null = null;
  private rafId: number | null = null;

  init(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.08,
      smoothWheel: true,
      touchMultiplier: 1.5,
      anchors: true,
    });

    const raf = (time: number) => {
      this.lenis?.raf(time);
      this.rafId = requestAnimationFrame(raf);
    };
    this.rafId = requestAnimationFrame(raf);
  }

  scrollTo(target: string | HTMLElement, options?: { offset?: number }): void {
    if (!this.lenis) return;

    if (typeof target === 'string') {
      const el = document.querySelector(target);
      if (el) this.lenis.scrollTo(el as HTMLElement, options);
    } else {
      this.lenis.scrollTo(target, options);
    }
  }

  destroy(): void {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.lenis?.destroy();
    this.lenis = null;
  }
}
