import { Component } from '@angular/core';
import {DataServiceProvider}from './services/data-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'surface';
  items;
  constructor(private service: DataServiceProvider) {
  }

  search(newText: string): void {
    this.service.getAll().subscribe(
      res=>{
        this.items=res;
      }
    )
  }
}
