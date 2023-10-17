import { Component } from '@angular/core';
import { Tab } from 'src/app/core/Models/Tab.models';
import { TabsService } from 'src/app/core/services/tabs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private service: TabsService) {}

  handleTabClick(title: string, conType: any) {
    let newtab: Tab = { title: title, componentType: conType };

    this.service.addTab(newtab);
  }
}
