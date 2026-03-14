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
      lerp: 0.1,
      smoothWheel: true,
      anchors: true,
    });

    const raf = (time: number) => {
      this.lenis?.raf(time);
      this.rafId = requestAnimationFrame(raf);
    };
    this.rafId = requestAnimationFrame(raf);

    window.addEventListener('resize', this.handleResize);
  }

  private handleResize = (): void => {
    this.lenis?.resize();
  };

  resize(): void {
    this.lenis?.resize();
  }

  destroy(): void {
    window.removeEventListener('resize', this.handleResize);
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.lenis?.destroy();
    this.lenis = null;
  }
}
