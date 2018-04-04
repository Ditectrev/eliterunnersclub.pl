import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

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

  constructor(private route: ActivatedRoute) { }

  // TODO: Add agile links.
  ngOnInit() {
    // Get access to the ID and name in the URL.
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
      age: this.route.snapshot.params['age'],
      city: this.route.snapshot.params['city'],
      activities: this.route.snapshot.params['activities'],
      kilometers: this.route.snapshot.params['kilometers']
    };
    this.route.params
    // Update ID and name whenever those parameters changes.
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
          this.user.age = params['age'];
          this.user.city = params['city'];
          this.user.activities = params['activities'];
          this.user.kilometers = params['kilometers'];
        }
      );
  }
}
