import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {JsonHttpProvider} from './services/json-http'
import {DataServiceProvider} from './services/data-service'
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {ItemCard} from './item-card/item-card';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ItemCard
  ],
  imports: [
    NgbModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule,JsonHttpProvider,DataServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
