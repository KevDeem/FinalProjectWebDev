import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface UserDetails {
  username: string
  email: string
  password: string

}

interface TokenResponse{
  token: string
}

export interface TokenPayload{
  username: string
  email: string
  password: string
}

export interface TokenPayloadlogin{
  username: string
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private token: string

  constructor(private http: HttpClient, private router: Router) { }


  public saveToken (token: string): void{
    localStorage.setItem('userToken', token)
    this.token = token
  }

  public getToken (): string {
    if (!this.token) {
      this.token = localStorage.getItem('userToken')
    }
    return this.token
  }

  public getUserDetails (): UserDetails {
    const token = this.getToken()
    let payload
    if (token) {
      payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    } else{
      return null
    }
  }

  public isLoggedIn (): boolean {
    return this.getToken() !== null
  }

  public register (user: TokenPayload): Observable<any> {
    const base = this.http.post('http://18.141.200.130/api/users', user)

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token){
          this.saveToken(data.token)
        }
        return data
      })
    )
    return request
  }

  public login (user: TokenPayloadlogin): Observable<any> {
    const base = this.http.post('http://18.141.200.130/api/users', user)

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
      })
    )
    return request
  }


  public logout (): void {
    this.token = ''
    window.localStorage.removeItem('userToken')
    this.router.navigateByUrl('/')
  }






  
}
