import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  getUserDetails(username, password){
    return this.http.post('/api/auth.php', {
      username,
      password
    }).subscribe(data => {
      console.log(data, "this one")
    }
    )
  }
}
