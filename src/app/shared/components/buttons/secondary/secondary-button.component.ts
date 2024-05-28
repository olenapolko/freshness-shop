import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-secondary-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secondary-button.component.html'
})
export class SecondaryButtonComponent {
  @Input() icon?: string;
  @Output() buttonClick = new EventEmitter<void>();

  handleClick() {
    this.buttonClick.emit();
  }
}
