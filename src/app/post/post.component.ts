import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  public postTitle = 'test title';
  public frameworkLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png';

  constructor() {
    setTimeout(() => {
      this.frameworkLogo = 'https://miro.medium.com/max/1200/1*JSFjofdjIH5RDVf-qOODGw.png';
    }, 3000);
  }

}
