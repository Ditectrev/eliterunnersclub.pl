import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  routes = [
    { 'url': '/o-klubie', 'name': 'O klubie' },
    { 'url': '/korzysci', 'name': 'Korzyści' },
    { 'url': '/aplikacje', 'name': 'Aplikacje' },
    { 'url': '/czlonkostwo', 'name': 'Członkostwo' },
    { 'url': '/kontakt', 'name': 'Kontakt' },
    { 'url': '/dolacz-do-klubu', 'name': 'Dołącz do Klubu' }
  ];
}
