import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductcardsComponent } from './productcards/productcards.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { LoginComponent } from './login/login.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdditemComponent } from './additem/additem.component';
import { ItemtableComponent } from './itemtable/itemtable.component';
import { EdititemComponent } from './edititem/edititem.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    RegistrationpageComponent,
    NavbarComponent,
    SidebarComponent,
    ProductcardsComponent,
    InventoryComponent,
    CartpageComponent,
    LoginComponent,
    AdminNavbarComponent,
    CheckoutComponent,
    AdditemComponent,
    ItemtableComponent,
    EdititemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
