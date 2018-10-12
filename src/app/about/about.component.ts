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
    // this.images = [
      // new ImageItem('assets/images/footer1.jpg'),
      // new ImageItem('./assets/images/footer2.jpg'),
      // new ImageItem('../assets/images/footer3.jpg'),
      // new ImageItem('assets/images/footer4.jpg')
    // ]
    // const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);
    // this.gallery.addImage({
    //   src: 'app/assets/images/footer1.jpg',
    //   thumb: 'app/assets/images/footer1.jpg',
    //   title: 'Some title'
    // });
    // this.images = [
    //   new ImageItem({src: "app/assets/images/footer1.jpg", thumb: "app/assets/images/footer1.jpg"}),
    //   new ImageItem({src: "app/assets/images/footer2.jpg", thumb: "app/assets/images/footer2.jpg"}),
    //   new ImageItem({src: "app/assets/images/footer3.jpg", thumb: "app/assets/images/footer3.jpg"}),
    //   new ImageItem({src: "app/assets/images/footer4.jpg", thumb: "app/assets/images/footer4.jpg"})
    // ];
  }
}
