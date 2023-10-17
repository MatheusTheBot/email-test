import { Injectable, OnInit } from '@angular/core';
import { Tab } from '../Models/Tab.models';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  private tabs: Tab[] = [];

  initialize() {
    this.tabs.push({ title: 'Inbox', componentType: 'InboxComponent' });
    this.tabs.push({ title: 'Inbox1', componentType: 'InboxComponent' });
    this.tabs.push({ title: 'Inbox2', componentType: 'InboxComponent' });
    this.tabs.push({ title: 'Inbox3', componentType: 'InboxComponent' });
    this.tabs.push({ title: 'Inbox4', componentType: 'InboxComponent' });
    this.tabs.push({ title: 'Inbox5', componentType: 'InboxComponent' });
  }

  addTab(tab: Tab): void {
    this.tabs.push(tab);
  }

  removeTab(tab: Tab): void {
    const tabIndex = this.tabs.indexOf(tab);
    if (tabIndex !== -1) {
      this.tabs.splice(tabIndex, 1);
    }
  }

  getTabs(): Tab[] {
    return this.tabs;
  }
}
