import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {UsersService} from '../users.service';
import {Observable} from 'rxjs/Observable';

interface User {
  id: number,
  name: string,
  age: number,
  city: string,
  activities: number,
  kilometers: number;
}

@Injectable()
export class UserResolver implements Resolve<User> {
  constructor(private usersService: UsersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    return this.usersService.getUser(+route.params['id']);
  }
}