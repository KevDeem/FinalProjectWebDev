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
    email: '',
    password: ''

  }

  constructor(private auth: AuthenticationService, private router: Router) { 

  }

  ngOnInit(): void {
  }

  login() {
    this.auth.login(this.credentials).subscribe(
      () => {
        if (this.credentials.email && this.credentials.password == "admin"){
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
