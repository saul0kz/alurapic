import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  @ViewChild('userNameInput', {static: false}) userNameInput: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });

    
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;
    this.authService
      .authenticate(userName, password)
      .subscribe(
        () => this.router.navigate(['user', userName]),
        err => {
         window.alert(err.message);
         this.userNameInput.nativeElement.focus();
        
          this.loginForm.reset();
          this.userNameInput.nativeElement.value = userName;
        }
      );


  }

}
