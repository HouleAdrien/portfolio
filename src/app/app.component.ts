import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showMenu = false;

  readonly currentYear = new Date().getFullYear();

  closeMenu(): void {
    this.showMenu = false;
  }

  toggleNavbar(): void {
    this.showMenu = !this.showMenu;
  }
}
