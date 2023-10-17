import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appResizable]',
})
export class ResizableDirective implements OnInit {
  @Input() resizableGrabWidth = 8;
  @Input() resizableMinWidth = 100;
  private dragging = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(
      this.el.nativeElement,
      'border-right',
      `${this.resizableGrabWidth}px solid gray`
    );
    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
    this.renderer.setStyle(this.el.nativeElement, 'white-space', 'wrap');
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(evt: MouseEvent): void {
    if (this.inDragRegion(evt)) {
      this.dragging = true;
      evt.preventDefault();
      evt.stopPropagation();
      document.body.style.pointerEvents = 'none';
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(evt: MouseEvent): void {
    if (this.inDragRegion(evt) || this.dragging) {
      this.el.nativeElement.style.cursor = 'col-resize';
    } else {
      this.el.nativeElement.style.cursor = 'default';
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMoveGlobal(evt: MouseEvent): void {
    if (this.dragging) {
      const newWidth = Math.max(
        this.resizableMinWidth,
        evt.clientX - this.el.nativeElement.offsetLeft
      );
      this.renderer.setStyle(this.el.nativeElement, 'width', `${newWidth}px`);
      evt.preventDefault();
      evt.stopPropagation();
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUpGlobal(evt: MouseEvent): void {
    if (this.dragging) {
      this.dragging = false;
      document.body.style.pointerEvents = 'auto';
      evt.preventDefault();
      evt.stopPropagation();
    }
  }

  private inDragRegion(evt: MouseEvent): boolean {
    return (
      this.el.nativeElement.clientWidth -
        evt.clientX +
        this.el.nativeElement.offsetLeft <
      this.resizableGrabWidth
    );
  }
}
