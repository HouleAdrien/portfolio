import { Component, Input } from '@angular/core';
import { Project } from '../../models/projectmodel';

@Component({
  selector: 'app-project-card',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() project!: Project;

  get initials(): string {
    return this.project.name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word.charAt(0).toUpperCase())
      .join('');
  }
}
