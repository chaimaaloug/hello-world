import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ChaimaLougsariModule} from './chaima-lougsari/chaima-lougsari.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ChaimaLougsariModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
