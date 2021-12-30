
import { NgModule } from '@angular/core';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';



@NgModule({
  declarations: [
    LoginComponent,
    LandingpageComponent,
   
  ],
  imports: [
    
    AccountRoutingModule
  ]
})
export class AccountModule { }
