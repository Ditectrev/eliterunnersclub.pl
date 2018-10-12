import {Component, OnInit} from '@angular/core';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  galleryImages: NgxGalleryImage[];
  galleryOptions: NgxGalleryOptions[];

  ngOnInit(): void {
    this.galleryOptions = [
      {
        image: false,
        width: '100%',
        height: '400px',
        thumbnailsColumns: 4,
        thumbnailsMargin: 0,
        thumbnailMargin: 0,
        thumbnailsAsLinks: true
      }
    ];
    this.galleryImages = [
      {
        small: 'assets/images/footer1.jpg',
        medium: 'assets/images/footer1.jpg',
        big: 'assets/images/footer1.jpg'
      },
      {
        small: 'assets/images/footer2.jpg',
        medium: 'assets/images/footer2.jpg',
        big: 'assets/images/footer2.jpg'
      },
      {
        small: 'assets/images/footer3.jpg',
        medium: 'assets/images/footer3.jpg',
        big: 'assets/images/footer3.jpg'
      },
      {
        small: 'assets/images/footer4.jpg',
        medium: 'assets/images/footer4.jpg',
        big: 'assets/images/footer4.jpg'
      }
    ];
  }
}
