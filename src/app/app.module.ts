import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [ // register components
    AppComponent, PostFormComponent, PostComponent
  ],
  imports: [ // import modules, we work in browser so brwoser
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // set "main" component, with which app starts
})
export class AppModule {}
