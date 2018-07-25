import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  myDate: Date;

  constructor() {
    this.myDate = new Date();
  }

  routes = [
    { 'url': '/prywatnosc', 'name': 'Polityka prywatności' },
    { 'url': '/cookies', 'name': 'Informacje o cookies' },
    { 'url': '/regulamin', 'name': 'Regulamin' }
  ];
}
