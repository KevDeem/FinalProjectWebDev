import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayloadlogin } from '../authentication.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: TokenPayloadlogin = {
    username: '',
    password: ''

  }

  constructor(private auth: AuthenticationService, private router: Router) { 

  }

  ngOnInit(): void {
  }

  login() {
    this.auth.login(this.credentials).subscribe(
      (res) => {
        this.auth.saveToken(res.access_token)
        this.auth.getToken()
        if ((this.credentials.username == "admin@admin.com") && (this.credentials.password == "admin")) {
          this.router.navigateByUrl('/inventory')
        }else{
          this.router.navigateByUrl('/mainpage')
        }
      },
      err => {
        console.error(err)
      }
    )
  }
}
