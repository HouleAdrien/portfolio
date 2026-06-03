import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay, switchMap } from 'rxjs';
import { PortfolioData } from '../models/projectmodel';
import { LanguageService } from './language.service';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  /** Portfolio data for the active language; re-fetched on language change. */
  readonly data$: Observable<PortfolioData>;

  constructor(private http: HttpClient, private language: LanguageService) {
    this.data$ = this.language.changes().pipe(
      switchMap((lang) => this.http.get<PortfolioData>(`assets/data.${lang}.json`)),
      shareReplay({ bufferSize: 1, refCount: false }),
    );
  }
}
