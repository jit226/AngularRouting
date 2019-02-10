import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { LoginComponent } from '../public/login/login.component';
import { SignupComponent } from '../public/signup/signup.component';
import { PubliclayoutComponent } from '../public/publiclayout/publiclayout.component';

import { Public1Component } from '../public/public1/public1.component';
import { Public2Component } from '../public/public2/public2.component';

const routes: Routes = [
  {
    path: '', component: PubliclayoutComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'p1', component: Public1Component },
      { path: 'p2', component: Public2Component },
      
    ]
  }

]

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    PubliclayoutComponent,
    Public1Component,
    Public2Component
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
      RouterModule
  ]
})
export class PublicModule { }
