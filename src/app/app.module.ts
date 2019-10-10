import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ // register components
    AppComponent,
    PostComponent
  ],
  imports: [ // import modules, we work in browser so brwoser
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // set "main" component, with which app starts
})
export class AppModule {}
