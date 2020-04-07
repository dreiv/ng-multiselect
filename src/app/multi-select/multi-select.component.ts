import { Component, Input, Output, EventEmitter } from '@angular/core';

export type MultiSelectOption = {
  id: string,
  checked: boolean;
  name: string;
}

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {
  @Input() options: MultiSelectOption[];
  @Output() selectedChange = new EventEmitter<string[]>();
  private selectedOptions: MultiSelectOption[];
  title = 'Select Option(s)';
  isOpen = false;

  constructor() { }

  onChange(index: number): void {
    this.options[index].checked = !this.options[index].checked;
    this.selectedOptions = this.options.filter(({ checked }) => checked);
    this.selectedChange.emit(this.selectedOptions.map(({ id }) => id));

    this.updateTitle();
  }

  updateTitle() {
    const selectedNo = this.selectedOptions.length;

    this.title = selectedNo ? `${selectedNo} options selected` : 'Select Option(s)';
  }

  onOpenChange(isOpen) {
    this.isOpen = isOpen;
  }

}
