import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-minus-button',
  templateUrl: './minus-button.component.html',
  styleUrls: ['./minus-button.component.css']
})
export class MinusButtonComponent {
  @Output() decrease = new EventEmitter<void>();

  sendDecrease() {
    this.decrease.emit();
  }
}
