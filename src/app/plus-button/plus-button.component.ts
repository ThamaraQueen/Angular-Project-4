import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-plus-button',
  templateUrl: './plus-button.component.html',
  styleUrls: ['./plus-button.component.css']
})
export class PlusButtonComponent {
  @Output() increase = new EventEmitter<void>();

  sendIncrease() {
    this.increase.emit();
  }
}
