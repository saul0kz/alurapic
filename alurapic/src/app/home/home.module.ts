import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, RouterModule
  ],
 
})
export class HomeModule { }
