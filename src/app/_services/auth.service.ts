import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper = new JwtHelperService();
  decodeToken: any;

  constructor(private http: HttpClient) {
  }

  login(model: any): Observable<any> {
    return this.http.post(environment.APIEndpoint + 'auth/login', model)
      .pipe(map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodeToken = this.jwtHelper.decodeToken(user.token);
        }
      }));
  }

  register(model: any) {
    return this.http.post(environment.APIEndpoint + 'auth/register', model);
  }

  loggedIn() {
    const token = localStorage.getItem(environment.tokenName);
    return !this.jwtHelper.isTokenExpired(token);
  }
}
