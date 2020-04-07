import { Component, OnInit } from '@angular/core';
import { MultiSelectOption } from './multi-select/multi-select.component';
import { MenuOption } from './menu/menu.component';

const getUid = () => Math.random().toString(36).substring(9)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  multiSelectOptions: MultiSelectOption[]
  menuOptions: MenuOption[]

  ngOnInit(): void {
    this.multiSelectOptions = [...Array(15)].map((_, i) => ({
      id: getUid(),
      checked: false,
      name: `Option number ${i}`
    }))

    this.menuOptions = [...Array(5)].map((_, i) => ({
      id: getUid(),
      closeOnSelect: true,
      name: `Option number ${i}`
    }))
  }

  onMenuSelect(id) {
    console.log('menu id', id);
  }

  onMultiSelect(ids) {
    console.log('multiselect ids', ids);
  }
}
