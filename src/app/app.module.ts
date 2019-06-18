import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {JsonHttpProvider} from './services/json-http'
import {DataServiceProvider} from './services/data-service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [JsonHttpProvider,DataServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
