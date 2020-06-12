import { Component, OnInit } from '@angular/core';
import { TokenPayload, AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrationpage',
  templateUrl: './registrationpage.component.html',
  styleUrls: ['./registrationpage.component.css']
})

export class RegistrationpageComponent implements OnInit {
  credentials: TokenPayload = {
    username: '',
    email: '',
    password: ''    
  }

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }
   register(){
    console.log(this.credentials)
    this.auth.register(this.credentials).subscribe(
      (res)=>{
        console.log(res)
        localStorage.setItem('token',res.token)
        this.router.navigateByUrl('/login')
      },
      err=>{
        console.error(err)
      }
    )
  }

}
