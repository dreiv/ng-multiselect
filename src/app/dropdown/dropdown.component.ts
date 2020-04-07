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
  @Output() onToggle = new EventEmitter();
  @Input() open = false;


  constructor(private utilitiesService: UtilitiesService) { }

  onClick() {
    const dropdown = this.dropdownRef.nativeElement;

    if (!dropdown.open) { // triggers when dropdown is opened
      this.utilitiesService.documentClicked$
        .pipe(find(({ target }) => !dropdown.contains(target)))
        .subscribe(() => { dropdown.open = false })
    }
  }
}
