import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { ProjectComponent } from './project/project.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { LangToggleComponent } from './lang-toggle/lang-toggle.component';

@NgModule({
  declarations: [
    ProjectComponent,
    TimelineItemComponent,
    ThemeToggleComponent,
    LangToggleComponent,
  ],
  imports: [CommonModule, TranslocoModule],
  exports: [
    ProjectComponent,
    TimelineItemComponent,
    ThemeToggleComponent,
    LangToggleComponent,
  ],
})
export class ComponentModule {}
