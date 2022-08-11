import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormControlComponent} from './form-control/form-control.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormControlComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
