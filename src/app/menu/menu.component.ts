import { Component, Input, Output, EventEmitter } from '@angular/core';

export type MenuOption = {
  id: string;
  name: string;
};

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() options: MenuOption[];
  @Output() selected = new EventEmitter<string>();
  toggle$ = new EventEmitter<boolean>();

  onSelect(index): void {
    const selectedOption = this.options[index];

    this.selected.emit(selectedOption.id);
    this.toggle$.emit(false);
  }
}
