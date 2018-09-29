import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  routes = [
    { 'url': '/o-klubie', 'name': 'O klubie' },
    { 'url': '/aplikacje', 'name': 'Aplikacje' },
    { 'url': '/czlonkostwo', 'name': 'Członkostwo' },
    { 'url': '/kontakt', 'name': 'Kontakt' }
  ];
}
