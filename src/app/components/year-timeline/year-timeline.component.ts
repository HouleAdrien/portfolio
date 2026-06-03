import { Component, Input } from '@angular/core';
import { Project } from '../../models/projectmodel';
import { deriveYear } from '../../utils/year.util';

export type YearMarker = {
  year: number;
  project: Project;
  initials: string;
};

@Component({
  selector: 'app-year-timeline',
  templateUrl: './year-timeline.component.html',
  styleUrls: ['./year-timeline.component.scss'],
})
export class YearTimelineComponent {
  /** Markers sorted most-recent first. */
  markers: YearMarker[] = [];

  @Input() set projects(value: Project[]) {
    this.markers = this.buildMarkers(value ?? []);
  }

  /** When true, display oldest first. */
  @Input() ascending = false;

  get orderedMarkers(): YearMarker[] {
    return this.ascending ? [...this.markers].reverse() : this.markers;
  }

  goToYear(year: number): void {
    document
      .getElementById(`year-${year}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private buildMarkers(projects: Project[]): YearMarker[] {
    const byYear = new Map<number, Project[]>();

    for (const project of projects) {
      const year = deriveYear(project.year);
      if (year === null) continue;
      const bucket = byYear.get(year);
      if (bucket) {
        bucket.push(project);
      } else {
        byYear.set(year, [project]);
      }
    }

    return [...byYear.entries()]
      .sort((a, b) => b[0] - a[0])
      .map(([year, items]) => {
        const project = this.pickFlagship(items);
        return { year, project, initials: this.initials(project.name) };
      });
  }

  private pickFlagship(items: Project[]): Project {
    return (
      items.find((p) => p.featured) ??
      items.find((p) => !!p.thumbnail) ??
      items[0]
    );
  }

  private initials(name: string): string {
    return name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word.charAt(0).toUpperCase())
      .join('');
  }
}
