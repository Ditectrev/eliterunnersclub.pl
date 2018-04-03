import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  routes = [
    { 'url': '/', 'name': 'Strona główna' },
    { 'url': '/o-klubie', 'name': 'O klubie' },
    { 'url': '/funkcje', 'name': 'Funkcje' },
    { 'url': '/kontakt', 'name': 'Kontakt' }
  ];
}
