import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { enterView } from '@angular/core/src/render3/instructions';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  jwtHelper = new JwtHelperService();

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    const token = localStorage.getItem(environment.tokenName);
    if (token) {
      this.authService.decodeToken = this.jwtHelper.decodeToken(token);
    }
  }
}
