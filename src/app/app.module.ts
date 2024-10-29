import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TranslatorModule } from './translator/translator.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TranslatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
