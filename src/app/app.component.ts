import {Component, OnInit} from '@angular/core';
import {AOS} from 'aos/dist/aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // TODO: Fix AOS.
  ngOnInit() {
    AOS.init();
  }
}
