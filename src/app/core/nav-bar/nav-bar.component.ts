import { SharedService } from './../../shared/services/shared.service';
import { Subscription } from 'rxjs';
import { UserService } from './../../features/user/services/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent  {
  constructor(private UserService :UserService,private SharedService:SharedService){}
  users$ = this.UserService.getUsers();

  selectUser(user:IUser){
    this.SharedService.selectedUser$.next(user)
    this.SharedService.updatePosts$.next(true)


  }


}
