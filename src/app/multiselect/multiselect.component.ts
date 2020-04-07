import { Component, ViewChild, ElementRef } from '@angular/core';
import { UtilitiesService } from '../utilities.service';
import { find } from 'rxjs/operators';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent {
  @ViewChild('select') selectRef: ElementRef

  constructor(private utilitiesService: UtilitiesService) { }

  onClick() {
    const select = this.selectRef.nativeElement;

    if (!select.open) { // triggers when dropdown is opened
      this.utilitiesService.documentClicked$
        .pipe(find(({ target }) => !select.contains(target)))
        .subscribe(() => { select.open = false })
    }
  }
}
