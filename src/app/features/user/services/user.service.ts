import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, switchMap, tap } from 'rxjs';
import { IComment } from 'src/app/shared/models/comment';
import { IPost } from 'src/app/shared/models/posts';
import { IUser } from 'src/app/shared/models/user';
import { SharedService } from 'src/app/shared/services/shared.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private SharedService: SharedService) {}
  url = environment.baseUrl;
  getUsers() {
    return this.http.get<IUser[]>(this.url + '/users');
  }


  getUserPosts() {
    return this.SharedService.selectedUser$.pipe(
      switchMap((user) =>
        this.http.get<IPost[]>(this.url + 'posts?userId=' + user.id)
      ),
      map((x) =>
        x.map((el, i) => {
          return {
            ...el,
            image: `../../../../assets/images/img-${i + 1}.jpg`,
            profileImage: '../../../../assets/images/user.jpg',
          };
        })
      )
    );
  }


  getComments(postId: number) {
    return this.http.get<IComment[]>(this.url + '/comments?postId=' + postId);
  }
}
