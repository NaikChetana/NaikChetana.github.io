import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  textInput = '';
  textOutput = '';
  constructor() {
  }

  onTextChange(event) {
    this.textInput = event.target.value;
  }

  handleOutput(event) {
    this.textOutput = event
  }
}
