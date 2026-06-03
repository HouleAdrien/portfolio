import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { ProjectComponent } from './project/project.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { LangToggleComponent } from './lang-toggle/lang-toggle.component';
import { YearTimelineComponent } from './year-timeline/year-timeline.component';

@NgModule({
  declarations: [
    ProjectComponent,
    TimelineItemComponent,
    ThemeToggleComponent,
    LangToggleComponent,
    YearTimelineComponent,
  ],
  imports: [CommonModule, RouterModule, TranslocoModule],
  exports: [
    ProjectComponent,
    TimelineItemComponent,
    ThemeToggleComponent,
    LangToggleComponent,
    YearTimelineComponent,
  ],
})
export class ComponentModule {}
