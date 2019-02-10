import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule } from "@angular/common";

import { LoginComponent } from '../public/login/login.component';

import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { ProfileComponent } from '../admin/profile/profile.component';

import { AdminlayoutComponent } from '../admin/adminlayout/adminlayout.component';

import { Admin1Component } from '../admin/admin1/admin1.component';
import { Admin2Component } from '../admin/admin2/admin2.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminlayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'employees', component: EmployeeListComponent },
      { path: 'a1', component: Admin1Component },
      { path: 'a2', component: Admin2Component },
    ]
  },

]

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    AdminlayoutComponent,
    Admin1Component,
    Admin2Component,
    EmployeeListComponent,
    CreateEmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]

})
export class AdminModule { }
