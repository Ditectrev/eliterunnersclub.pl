import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Adam'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Paweł'
    }
  ];
}
