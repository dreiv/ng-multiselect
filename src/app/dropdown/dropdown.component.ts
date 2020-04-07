import { Component, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { UtilitiesService } from '../utilities.service';
import { find } from 'rxjs/operators';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @ViewChild('dropdown') dropdownRef: ElementRef
  @Output() openChange = new EventEmitter();
  set open(val) {
    this.dropdownRef.nativeElement.open = val;
    this.openChange.emit(val);
  }
  get open(): boolean {
    return this.dropdownRef.nativeElement.open;
  }

  constructor(private utilitiesService: UtilitiesService) { }

  onClick() {
    this.openChange.emit(!this.open);

    if (!this.open) { // triggers when dropdown is opened
      this.utilitiesService.documentClicked$
        .pipe(find(({ target }) => !this.dropdownRef.nativeElement.contains(target)))
        .subscribe(() => { this.open = false })
    }
  }
}
