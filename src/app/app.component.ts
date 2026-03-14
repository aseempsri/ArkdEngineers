import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LenisService } from './services/lenis.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly lenis = inject(LenisService);

  ngOnInit(): void {
    this.lenis.init();
  }

  ngOnDestroy(): void {
    this.lenis.destroy();
  }
}
