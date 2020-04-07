import { Component, Input, Output, EventEmitter } from '@angular/core';

export type MenuOption = {
  id: string,
  closeOnSelect: boolean;
  name: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() options: MenuOption[];
  @Output() selected = new EventEmitter<string>();
  toggle = new EventEmitter<boolean>();

  constructor() { }

  onSelect(index) {
    const selectedOption = this.options[index];

    this.selected.emit(selectedOption.id);
    this.toggle.emit(selectedOption.closeOnSelect);
  }

}
