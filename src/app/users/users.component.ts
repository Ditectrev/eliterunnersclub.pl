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
      name: 'Adam',
      age: 26,
      city: 'Warszawa',
      activities: 27,
      kilometers: 2081
    },
    {
      id: 2,
      name: 'Anna',
      age: 43,
      city: 'Wrocław',
      activities: 6,
      kilometers: 675
    },
    {
      id: 3,
      name: 'Paweł',
      age: 21,
      city: 'Łódź',
      activities: 52,
      kilometers: 4532
    }
  ];
}
