import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { InboxComponent } from '../inbox/inbox.component';
import { TabsService } from 'src/app/core/services/tabs.service';
import { Tab } from 'src/app/core/Models/Tab.models';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  constructor(private service: TabsService) {}

  allTabs: Tab[] = [];

  ngOnInit() {
    this.service.initialize();
    this.allTabs = this.service.getTabs();

    console.log(this.allTabs);
  }
}
