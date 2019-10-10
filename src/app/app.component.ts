import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basic';
  inputValue = '';

  onInput(event) {
    // this.inputValue = (event.target as HTMLInputElement).value;
  }

  onBlur(str: string) {
    this.inputValue = str;
  }
}
