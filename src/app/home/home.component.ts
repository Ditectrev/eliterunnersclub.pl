import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {

  }

  onLoadUser(id: number) {
    this.router.navigate(['/uzytkownicy', id, 'edytuj'], {queryParams: {allowEdit: '1'}, fragment: 'loading'}); // Navigate to new route, make this absolute path.
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
