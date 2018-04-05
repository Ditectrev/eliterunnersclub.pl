import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data, Params, Router} from '@angular/router';
import {UsersService} from '../users.service';

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
  }

  // TODO: Implement onEdit method.
  onEdit() {

  }
}
