import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { map, of, tap, delay } from 'rxjs';
import { IComment } from 'src/app/shared/models/comment';
import { IPost } from 'src/app/shared/models/posts';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  posts :IPost[]=[]
  selectedUser$: any;
  comments: IComment[] = [];
  selectedPost = 0;
  isLoading = this.SharedService.isLoading$;
  constructor(
    private UserService: UserService,
    private SharedService: SharedService
  ) {}
  ngOnInit(): void {
    this.SharedService.selectedUser$.pipe(tap(()=>this.selectedUser$=[]),delay(1)).subscribe(
      (data) => (this.selectedUser$ = data)
    );
    this.getPosts()

  }

  getPosts(){
    this.UserService.getUserPosts().pipe(tap(()=>this.posts=[]),delay(500)).subscribe(posts => {
      this.posts = posts
    })
  }

  getComments(postId: number) {
    this.UserService.getComments(postId).subscribe((comments) => {
      this.comments = comments;
    });
  }

  showComments(postId: number) {
    this.comments = [];
    this.getComments(postId);
    this.selectedPost = postId;
  }

  hideComments() {
    this.comments = [];
    this.selectedPost = 0;
  }
}
