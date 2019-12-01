import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from './new-user';


const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class SignupService {

  constructor(private http: HttpClient) { }

  signup(newUser: NewUser) {
    return this.http.post(API_URL + '/user/signup', newUser);
  }
}
