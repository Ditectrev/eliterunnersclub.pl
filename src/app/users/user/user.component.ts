import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {UsersService} from '../users.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: {
    id: number,
    name: string,
    age: number,
    city: string,
    activities: number,
    kilometers: number
  };

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.user = data['user']
        }
      );

    // Gallery.
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/gallery/pawel1.jpg',
        medium: 'assets/images/gallery/pawel1.jpg',
        big: 'assets/images/gallery/pawel1.jpg'
      },
      {
        small: 'assets/images/gallery/pawel2.jpg',
        medium: 'assets/images/gallery/pawel2.jpg',
        big: 'assets/images/gallery/pawel2.jpg'
      },
      {
        small: 'assets/images/gallery/pawel3.jpg',
        medium: 'assets/images/gallery/pawel3.jpg',
        big: 'assets/images/gallery/pawel3.jpg'
      }
    ];
  }

  // TODO: Fix onEdit method.
  onEdit() {
    this.router.navigate(['edytuj'], {relativeTo: this.route, queryParamsHandling: 'preserve'}); // Make relative path, queryParamsHandling handles query parameters.
  }
}
