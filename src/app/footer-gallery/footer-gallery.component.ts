import { Component } from '@angular/core';


@Component({
  selector: 'app-footer-gallery',
  templateUrl: './footer-gallery.component.html',
  styleUrls: ['./footer-gallery.component.scss']
})
export class FooterGalleryComponent {
  footer_gallery = [
    {
      name: 'O klubie',
      url: 'assets/images/footer-gallery1.jpg'
    },
    {
      name: 'Korzyści',
      url: 'assets/images/footer-gallery2.jpg'
    },
    {
      name: 'Aplikacje',
      url: 'assets/images/footer-gallery3.jpg'
    },
    {
      name: 'Członkostwo',
      url: 'assets/images/footer-gallery4.jpg'
    }
  ]
}
