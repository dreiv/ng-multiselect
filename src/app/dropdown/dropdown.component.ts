import {
  Component,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  Input,
  OnInit,
  OnDestroy,
  ContentChildren,
  QueryList,
  AfterContentInit,
  Directive
} from '@angular/core';
import { UtilitiesService } from '../utilities.service';
import { takeUntil, find } from 'rxjs/operators';
import { Observable, Subject, fromEvent } from 'rxjs';

@Directive({ selector: '[dropdown-option]' })
export class DropdownOption {}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, AfterContentInit, OnDestroy {
  @ViewChild('dropdown')
  dropdownRef: ElementRef;
  @ContentChildren(DropdownOption, { descendants: true, read: ElementRef })
  options: QueryList<ElementRef>;
  @Output()
  toggled$ = new EventEmitter();
  @Input()
  toggle$: Observable<boolean>;
  set open(open) {
    this.dropdownRef.nativeElement.open = open;
    this.toggled$.emit(open);
  }
  get open(): boolean {
    return this.dropdownRef.nativeElement.open;
  }
  focusedIdx = -1;
  destroy$ = new Subject<void>();

  constructor(private utilitiesService: UtilitiesService) {}

  ngOnInit() {
    this.toggle$ &&
      this.toggle$.pipe(takeUntil(this.destroy$)).subscribe((isOpen) => {
        this.open = isOpen;
      });
  }

  ngAfterContentInit() {
    this.options.toArray().forEach((option, index) => {
      fromEvent(option.nativeElement, 'click')
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.focusedIdx = index;
        });
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  onClick() {
    this.toggled$.emit(!this.open);

    if (!this.open) {
      // triggers when dropdown is opened
      this.utilitiesService.documentClicked$
        .pipe(
          find(({ target }) => !this.dropdownRef.nativeElement.contains(target))
        )
        .subscribe(() => {
          this.open = false;
        });

      this.utilitiesService.documentKeyPressed$
        .pipe(takeUntil(this.toggled$))
        .subscribe((event: KeyboardEvent) => {
          const options = this.options.toArray();

          switch (event.key) {
            case 'Escape':
              this.open = false;
              break;
            case 'ArrowUp':
              event.preventDefault();
              this.focusedIdx =
                (this.focusedIdx - 1 + options.length) % options.length;
              options[this.focusedIdx].nativeElement.focus();
              break;
            case 'ArrowDown':
              event.preventDefault();
              this.focusedIdx = (this.focusedIdx + 1) % options.length;
              options[this.focusedIdx].nativeElement.focus();
              break;
          }
        });
    }
  }
}
