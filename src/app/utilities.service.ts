import { Injectable } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  documentClicked$: Observable<Event>;

  constructor() {
    this.documentClicked$ = fromEvent(document, 'click');
  }
}
