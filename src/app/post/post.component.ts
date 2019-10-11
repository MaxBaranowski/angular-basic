import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Post {
  id: number;
  title: string;
  text: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Input() postIndex: number;

  @Output() onRemove: EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  removePost() {
    this.onRemove.emit(this.post.id);
  }

}
