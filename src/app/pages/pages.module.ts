import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ComponentsModule } from '../components/components.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, ComponentsModule, CoreModule],
  exports: [MainComponent],
})
export class PagesModule {}
