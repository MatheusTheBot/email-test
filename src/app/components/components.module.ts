import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CoreModule } from '../core/core.module';
import { InboxComponent } from './inbox/inbox.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    SidebarComponent,
    InboxComponent,
    ContentComponent,
  ],
  imports: [CommonModule, CoreModule],
  exports: [
    ToolbarComponent,
    SidebarComponent,
    InboxComponent,
    ContentComponent,
  ],
})
export class ComponentsModule {}
