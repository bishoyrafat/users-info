import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { IUser } from 'src/app/shared/models/user';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(UserService);
  });

  it('should Users be exist', (done:DoneFn) => {
    service.getUsers().subscribe((user:any) =>{
      expect(user[0].id).toBe(1)
      done()
    })
  });
});
