import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { ClickOutsideDirective } from './click-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    MultiselectComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
