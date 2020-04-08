import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MultiSelectOption } from '../multi-select/multi-select.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() options: MultiSelectOption[];
  @Output() selected = new EventEmitter<string>();
  toggle$ = new EventEmitter<boolean>();
  title = 'Select Option';
  isOpen = false;

  constructor() { }

  onSelect(index: number): void {
    const selectedOption = this.options[index];
    this.selected.emit(selectedOption.id);
    this.toggle$.emit(false);

    this.title = selectedOption.name;
  }

  onMenuToggle(isOpen) {
    this.isOpen = isOpen;
  }

}
