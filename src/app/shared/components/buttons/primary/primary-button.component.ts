import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primary-button.component.html'
})
export class PrimaryButtonComponent {
  @Input() icon?: string;
  @Input() disabled?: boolean = false;
  @Output() buttonClick = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled) {
      this.buttonClick.emit();
    }
  }
}
