import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import {
  Translation,
  TranslocoLoader,
  TranslocoModule,
  provideTransloco,
  translocoConfig,
} from '@ngneat/transloco';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string) {
    return this.http.get<Translation>(`assets/i18n/${lang}.json`);
  }
}

export const SUPPORTED_LANGS = ['en', 'fr'] as const;
export type SupportedLang = (typeof SUPPORTED_LANGS)[number];
export const DEFAULT_LANG: SupportedLang = 'en';

@NgModule({
  exports: [TranslocoModule],
  providers: [
    provideTransloco({
      config: translocoConfig({
        availableLangs: [...SUPPORTED_LANGS],
        defaultLang: DEFAULT_LANG,
        fallbackLang: DEFAULT_LANG,
        reRenderOnLangChange: true,
        prodMode: environment.production,
      }),
      loader: TranslocoHttpLoader,
    }),
  ],
})
export class TranslocoRootModule {}
