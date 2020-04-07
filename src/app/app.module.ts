import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { MenuComponent } from './menu/menu.component';
import { SelectComponent } from './select/select.component';
import { ContextComponent } from './menu/triggers/context/context.component';
import { TextComponent } from './menu/triggers/text/text.component';
import { BurgerComponent } from './menu/triggers/burger/burger.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    MultiSelectComponent,
    MenuComponent,
    SelectComponent,
    ContextComponent,
    TextComponent,
    BurgerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
