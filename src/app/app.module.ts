import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {JsonHttpProvider} from './services/json-http'
import {DataServiceProvider} from './services/data-service'
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule,JsonHttpProvider,DataServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
