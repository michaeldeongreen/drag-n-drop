import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DndDirective } from './dnd/dnd.directive';
import { DndComponent } from './dnd/dnd.component';

@NgModule({
  declarations: [
    AppComponent,
    DndDirective,
    DndComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
