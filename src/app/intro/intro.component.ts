import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  slides = [
    {
      image: 'assets/images/intro-image1.jpg',
      title: 'Bieganie to wspaniały świat'
    },
    {
      image: 'assets/images/intro-image2.jpg',
      title: 'Bieganie to wspaniały świat'
    },
    {
      image: 'assets/images/intro-image3.jpg',
      title: 'Bieganie to wspaniały świat'
    }
  ]
}
