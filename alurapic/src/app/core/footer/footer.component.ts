import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  user$: Observable<User>;

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit() {
    this.user$ = this.userService.getUser();
  }

}
