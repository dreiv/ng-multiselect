import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent {
  @ViewChild('select') select;

  outside() {
    console.log('click outside');
  }

}
