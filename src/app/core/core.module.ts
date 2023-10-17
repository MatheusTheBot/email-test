import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableDirective } from './directives/resizable.directive';

@NgModule({
  declarations: [ResizableDirective],
  exports: [ResizableDirective],
  imports: [CommonModule],
})
export class CoreModule {}
