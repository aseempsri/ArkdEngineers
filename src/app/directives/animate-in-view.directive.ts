import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appAnimateInView]',
  standalone: true,
})
export class AnimateInViewDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private observer: IntersectionObserver | null = null;

  @Input() margin = '-80px';
  @Input() once = true;
  @Output() inView = new EventEmitter<boolean>();

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const visible = entry.isIntersecting;
          this.inView.emit(visible);
          if (visible && this.once) {
            this.el.nativeElement.classList.add('animate-in-view');
          }
        });
      },
      { rootMargin: this.margin, threshold: 0.1 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
