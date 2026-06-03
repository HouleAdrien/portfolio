import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme, ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent {
  readonly theme$: Observable<Theme>;

  constructor(private themeService: ThemeService) {
    this.theme$ = themeService.changes();
  }

  toggle(): void {
    this.themeService.toggle();
  }
}
