import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
{path : "mainpage", component : MainpageComponent},
{path : "login", component : LoginComponent},
{path : "navbar", component : NavbarComponent},
{path : "inventory", component : InventoryComponent},
{path : "cartpage", component : CartpageComponent},
{path : "registerpage", component : RegistrationpageComponent},
{path : "**", redirectTo : "/mainpage", pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
