import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  selectedUser$ = new Subject<IUser>();
  isLoading$ = new BehaviorSubject(false)
  updatePosts$=new Subject()
}
