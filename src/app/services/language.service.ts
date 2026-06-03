import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';
import { DEFAULT_LANG, SUPPORTED_LANGS, SupportedLang } from '../transloco-root.module';

const STORAGE_KEY = 'portfolio.lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  constructor(private transloco: TranslocoService) {
    const initial = this.resolveInitialLang();
    this.transloco.setActiveLang(initial);
  }

  get current(): SupportedLang {
    return this.transloco.getActiveLang() as SupportedLang;
  }

  changes(): Observable<string> {
    return this.transloco.langChanges$;
  }

  setLang(lang: SupportedLang): void {
    if (!SUPPORTED_LANGS.includes(lang) || lang === this.current) return;
    this.transloco.setActiveLang(lang);
    this.persist(lang);
  }

  toggle(): void {
    this.setLang(this.current === 'en' ? 'fr' : 'en');
  }

  private resolveInitialLang(): SupportedLang {
    const stored = this.readStored();
    if (stored) return stored;
    const browser = (navigator.language ?? '').slice(0, 2).toLowerCase();
    return browser === 'fr' ? 'fr' : DEFAULT_LANG;
  }

  private readStored(): SupportedLang | null {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return SUPPORTED_LANGS.includes(value as SupportedLang)
        ? (value as SupportedLang)
        : null;
    } catch {
      return null;
    }
  }

  private persist(lang: SupportedLang): void {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // storage unavailable — silently ignore
    }
  }
}
