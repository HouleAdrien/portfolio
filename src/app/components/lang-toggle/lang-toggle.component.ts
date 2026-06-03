import { Component } from '@angular/core';
import { Observable, map, startWith } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import { SupportedLang } from '../../transloco-root.module';

@Component({
  selector: 'app-lang-toggle',
  templateUrl: './lang-toggle.component.html',
  styleUrls: ['./lang-toggle.component.scss'],
})
export class LangToggleComponent {
  readonly current$: Observable<SupportedLang>;

  constructor(private language: LanguageService) {
    this.current$ = this.language.changes().pipe(
      map((lang) => lang as SupportedLang),
      startWith(this.language.current),
    );
  }

  toggle(): void {
    this.language.toggle();
  }
}
