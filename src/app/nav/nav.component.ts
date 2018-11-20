import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
import { Menu } from '../_models/menu';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  links: Menu[] = [];
  constructor(private authService: AuthService, private alertify: AlertifyService, private router: Router) {
  }

  ngOnInit() {
    this.links.push(
      {name: 'Matches', path: '/members', icon: 'fa fa-users'},
      {name: 'List', path: '/lists', icon: 'fa fa-list-ol'},
      {name: 'Messages', path: '/messages', icon: 'fa fa-commenting-o'}
    );
    console.log('load menu');
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }

  getUser() {
    return this.authService.decodeToken.unique_name;
  }
}
