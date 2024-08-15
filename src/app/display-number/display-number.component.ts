import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-number',
  template: `
    <p>{{ number }}</p>
    <button (click)="reset()">Reset</button>
  `,
  styleUrl: './display-number.component.css'
})
export class DisplayNumberComponent {
  @Input() number: number = 0;
  @Output() resetEvent = new EventEmitter<void>();

  reset() {
    this.resetEvent.emit();
  }
}
