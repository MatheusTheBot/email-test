import { Component, Input } from '@angular/core';
import { Tab } from 'src/app/core/Models/Tab.models';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css'],
})
export class InboxComponent {
  @Input() content: Tab = { title: '', componentType: null };
}
