import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioData, Project, WorkKind } from '../../models/projectmodel';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { deriveYear } from '../../utils/year.util';

type Filter = 'all' | WorkKind;

export type YearGroup = {
  year: number;
  projects: Project[];
};

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent {
  readonly data$: Observable<PortfolioData>;
  filter: Filter = 'all';
  /** false = most recent first (default), true = oldest first. */
  sortAsc = false;

  constructor(private dataService: PortfolioDataService) {
    this.data$ = this.dataService.data$;
  }

  setFilter(value: Filter): void {
    this.filter = value;
  }

  toggleSort(): void {
    this.sortAsc = !this.sortAsc;
  }

  /** Filtered projects grouped by year, most recent first. */
  groupedProjects(projects: Project[]): YearGroup[] {
    const visible =
      this.filter === 'all'
        ? projects
        : projects.filter((p) => p.kind === this.filter);

    const byYear = new Map<number, Project[]>();
    for (const project of visible) {
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
      .sort((a, b) => (this.sortAsc ? a[0] - b[0] : b[0] - a[0]))
      .map(([year, items]) => ({ year, projects: items }));
  }
}
