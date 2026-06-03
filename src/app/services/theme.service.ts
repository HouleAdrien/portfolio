import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'portfolio.theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly theme$ = new BehaviorSubject<Theme>(this.resolveInitialTheme());

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.applyTheme(this.theme$.value, /* animate */ false);
  }

  get theme(): Theme {
    return this.theme$.value;
  }

  changes(): Observable<Theme> {
    return this.theme$.asObservable();
  }

  toggle(): void {
    this.setTheme(this.theme === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: Theme): void {
    if (theme === this.theme$.value) return;
    this.theme$.next(theme);
    this.persist(theme);
    this.applyTheme(theme, /* animate */ true);
  }

  private resolveInitialTheme(): Theme {
    const stored = this.readStored();
    if (stored) return stored;
    const prefersDark = typeof window !== 'undefined'
      && window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  private applyTheme(theme: Theme, animate: boolean): void {
    const root = this.document.documentElement;
    if (animate) {
      root.classList.add('theme-transition');
      window.setTimeout(() => root.classList.remove('theme-transition'), 450);
    }
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
  }

  private readStored(): Theme | null {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return value === 'dark' || value === 'light' ? value : null;
    } catch {
      return null;
    }
  }

  private persist(theme: Theme): void {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // storage unavailable — silently ignore
    }
  }
}
