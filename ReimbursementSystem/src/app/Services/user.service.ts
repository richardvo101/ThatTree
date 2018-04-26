import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ERS_USERS } from '../models/ERS_USERS';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const API_URL = environment.apiUrl;
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};



@Injectable()
export class UserService {
    loggedIn: ERS_USERS = JSON.parse(localStorage.getItem('credential'));
    subscriber: BehaviorSubject<ERS_USERS> = new BehaviorSubject<ERS_USERS>(null);
    constructor(private http: HttpClient) {
        const u = localStorage.getItem('user');
        if ( u !== '{}' && u !== undefined) {
            this.subscriber.next(JSON.parse(u));
      }
    }

      public loginUser(user: ERS_USERS) {
        console.log(`Attempting to login user: ${user.ers_username}`);
        const json = JSON.stringify(user);
        console.log(json);
        return this.http.post<ERS_USERS>(API_URL + 'login', json, HTTP_OPTIONS);
      }

      isLoggedIn() {
        if (this.loggedIn == null) {
          return false;
        }
        return true;
      }

      whatStatus() {
        if (localStorage.getItem('status') === '1') {
          return false;
        } else {
          return true;
        }
        }

      admin() {
        if (localStorage.getItem('status') === '3') {
        return true;
        }
      }

      public updatesUser(user: ERS_USERS) {
        console.log(`Updating user: ${user.ers_username}`);
        const json = JSON.stringify(user);
        return this.http.post<ERS_USERS>(API_URL + 'updateuser', json, HTTP_OPTIONS);
      }

      public createUser(user: ERS_USERS) {
        console.log(`Creating a user  ${user.ers_username}`);
        const json = JSON.stringify(user);
        return this.http.post<ERS_USERS>(API_URL + 'register', json, HTTP_OPTIONS);
      }
}
