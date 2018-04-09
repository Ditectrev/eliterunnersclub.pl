import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {CanComponentDeactivate} from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, CanComponentDeactivate {
  user: {
    id: number,
    name: string,
    age: number,
    city: string,
    activities: number,
    kilometers: number
  };

  userName = '';
  userAge = 0;
  userCity = '';
  userActivities = 0;
  userKilometers = 0;

  allowEdit = false;
  changesSaved = false;

  constructor(private usersService: UsersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // Retrieve query parameters.
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id'];

    this.user = this.usersService.getUser(id);
    this.userName = this.user.name;
    this.userAge = this.user.age;
    this.userCity = this.user.city;
    this.userActivities = this.user.activities;
    this.userKilometers = this.user.kilometers;
  }

  onUpdateUser() {
    this.usersService.updateUser(this.user.id, {name: this.userName, age: this.userAge, city: this.userCity, activities:  this.userActivities, kilometers: this.userKilometers});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route}); // Go up level to lastly loaded server.
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.userName !== this.user.name || this.userAge !== this.user.age || this.userCity !== this.user.city || this.userActivities !== this.user.activities || this.userKilometers !== this.user.kilometers) && !this.changesSaved) {
      return confirm('Potwierdź, że chcesz utracić zapisane zmiany');
    } else {
      return true; // Changes saved or nothing has changed, then return true.
    }
  }
}
