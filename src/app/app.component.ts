import { Component, Output } from '@angular/core';
import { Post } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[] = [
    {
      id: 1,
      title: 'First post',
      text: 'Post 1 text'
    },
    {
      id: 2,
      title: 'Second post',
      text: 'Post 2 text'
    }, {
      id: 3,
      title: 'Third post',
      text: 'Post 3 text'
    }
  ];

  addPost(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    this.posts = this.posts.filter(el => el.id !== id);
  }
}
