import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ]
})
export class SigninModule { }