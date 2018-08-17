import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  routes = [
    { 'url': '/o-klubie', 'name': 'O klubie' },
    // { 'url': '/aplikacje', 'name': 'Aplikacje' },
    { 'url': '/trening-indywidualny', 'name': 'Indywidualny trening' },
    { 'url': '/kontakt', 'name': 'Kontakt' }
  ];
}
