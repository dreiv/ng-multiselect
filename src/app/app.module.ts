import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  DropdownOption,
  DropdownComponent
} from './dropdown/dropdown.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { MenuComponent } from './menu/menu.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownOption,
    DropdownComponent,
    MultiSelectComponent,
    MenuComponent,
    SelectComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
