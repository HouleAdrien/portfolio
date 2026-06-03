import { Component, Input } from '@angular/core';
import { TimelineEntry } from '../../models/projectmodel';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss'],
})
export class TimelineItemComponent {
  @Input() entry!: TimelineEntry;
  @Input() last = false;
}
