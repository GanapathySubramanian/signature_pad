import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignaturePadComponent } from './component/shared/signature-pad/signature-pad.component';

@NgModule({
  declarations: [
    AppComponent,
    SignaturePadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
