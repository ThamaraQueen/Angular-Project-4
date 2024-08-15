import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlusButtonComponent } from './plus-button/plus-button.component';
import { MinusButtonComponent } from './minus-button/minus-button.component';
import { DisplayNumberComponent } from './display-number/display-number.component';

@NgModule({
  declarations: [
    AppComponent,
    PlusButtonComponent,
    MinusButtonComponent,
    DisplayNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
