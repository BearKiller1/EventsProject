import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"admin/landing",
    component:LandingComponent,
  },
  {
    path:"admin/register",
    component:RegisterComponent,
  },
  {
    path:"admin/login",
    component:LoginComponent,
  },
  {
    path:"",
    redirectTo:"landing",
    pathMatch:"full",
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
