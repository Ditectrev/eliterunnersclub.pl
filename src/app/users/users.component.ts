import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private users: {id: number, name: string, age: number, city: string, activities: number, kilometers: number}[] = [];

  constructor(private usersService: UsersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }
}
