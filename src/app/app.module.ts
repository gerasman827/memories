import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Effect1Component } from './components/effect1/effect1.component';
import { Effect2Component } from './components/effect2/effect2.component';
import { Effect3Component } from './components/effect3/effect3.component';

@NgModule({
  declarations: [
    AppComponent,
    Effect1Component,
    Effect2Component,
    Effect3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
