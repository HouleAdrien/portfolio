import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioData } from '../../models/projectmodel';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-presentation-page',
  templateUrl: './presentation-page.component.html',
  styleUrls: ['./presentation-page.component.scss'],
})
export class PresentationPageComponent {
  readonly data$: Observable<PortfolioData>;

  constructor(private dataService: PortfolioDataService) {
    this.data$ = this.dataService.data$;
  }

  scrollToId(id: string): void {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
