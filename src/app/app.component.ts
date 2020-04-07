import { Component, OnInit } from '@angular/core';
import { MultiSelectOption } from './multi-select/multi-select.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  multiSelectOptions: MultiSelectOption[]

  ngOnInit(): void {
    this.multiSelectOptions = [...Array(15)].map((_, i) => ({
      id: Math.random().toString(36).substring(4),
      checked: false,
      name: `Option number ${i}`
    }))
  }

  onMultiSelect(ids) {
    console.log('multiselect ids', ids);
  }
}
