import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../post/post.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  formTitle: '';
  formText: '';

  @Output() onAdd: EventEmitter<Post> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  addPost() {
    // check for non empty strings
    if (this.formText.trim() && this.formTitle.trim()) {
      const post: Post = {
        id: new Date().getTime(),
        title: this.formTitle,
        text: this.formText
      };
      this.formText = this.formTitle = '';
      this.onAdd.emit(post);
    }
  }

}
