import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number: number = 0;

  increaseNumber() {
    this.number++;
  }

  decreaseNumber() {
    this.number--;
  }

  resetNumber() {
    this.number = 0;
  }
}
