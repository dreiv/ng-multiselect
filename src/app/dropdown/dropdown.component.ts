import { Component, ViewChild, ElementRef, Output, EventEmitter, Input, OnInit, OnDestroy, ContentChildren, QueryList, AfterContentInit, Directive } from '@angular/core';
import { UtilitiesService } from '../utilities.service';
import { takeUntil, find } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Directive({ selector: '[dropdown-option]' })
export class DropdownOption { }

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, AfterContentInit, OnDestroy {
  @ViewChild('dropdown')
  dropdownRef: ElementRef;
  @ContentChildren(DropdownOption)
  options: QueryList<DropdownOption>;
  @Output()
  openChange = new EventEmitter();
  @Input()
  toggle: Observable<boolean>;
  set open(val) {
    this.dropdownRef.nativeElement.open = val;
    this.openChange.emit(val);
  }
  get open(): boolean {
    return this.dropdownRef.nativeElement.open;
  }
  destroy$ = new Subject<void>();

  constructor(private utilitiesService: UtilitiesService) { }

  ngOnInit() {
    if (this.toggle) {
      this.toggle
        .pipe(takeUntil(this.destroy$))
        .subscribe(isOpen => { this.open = isOpen });
    }
  }

  ngAfterContentInit() {
    console.log('options', this.options);
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  onClick() {
    this.openChange.emit(!this.open);

    if (!this.open) { // triggers when dropdown is opened
      this.utilitiesService.documentClicked$
        .pipe(find(({ target }) => !this.dropdownRef.nativeElement.contains(target)))
        .subscribe(() => { this.open = false })
    }
  }
}
