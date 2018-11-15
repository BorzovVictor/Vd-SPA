import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(model: any): Observable<any> {
    return this.http.post(environment.APIEndpoint + '/auth/login', model)
      .pipe(map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
        }
      }));
  }

  register(model: any) {
    return this.http.post(environment.APIEndpoint + '/auth/register', model);
  }
}
