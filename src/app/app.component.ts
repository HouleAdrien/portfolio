import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, switchMap } from 'rxjs';
import { PortfolioData, Project, WorkKind } from './models/projectmodel';
import { LanguageService } from './services/language.service';

type Filter = 'all' | WorkKind;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  data: PortfolioData | undefined;
  filter: Filter = 'all';
  showMenu = false;

  readonly currentYear = new Date().getFullYear();
  private langSub?: Subscription;

  constructor(private http: HttpClient, private language: LanguageService) {}

  ngOnInit(): void {
    this.langSub = this.language
      .changes()
      .pipe(switchMap((lang) => this.http.get<PortfolioData>(`assets/data.${lang}.json`)))
      .subscribe((data) => {
        this.data = data;
      });
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
  }

  setFilter(value: Filter): void {
    this.filter = value;
  }

  get filteredProjects(): Project[] {
    if (!this.data) return [];
    if (this.filter === 'all') return this.data.projects;
    return this.data.projects.filter((p) => p.kind === this.filter);
  }

  navigateToElement(name: string): void {
    const element = document.getElementById(name);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.showMenu = false;
  }

  toggleNavbar(): void {
    this.showMenu = !this.showMenu;
  }
}
