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
  searchValue='';
  checkShanHai=true;
  checkPhoto=true;
  constructor(private service: DataServiceProvider) {
  }

  search(newText: string): void {
    let val=this.searchValue;
    if(this.checkShanHai){
      val+=' 上海 魔都';
    }
    this.service.search(val,this.checkPhoto).subscribe(
      res=>{
        this.items=res;
      }
    )
  }

  searchClick():void{
    this.search('');
  }

  rating(item:any):void{
    let updateObj={
      'url':item.url,
      'rate':item.rate
    }
    this.service.update(updateObj).subscribe();
  }

  invisible(item:any):void{
    let updateObj={
      'url':item.url,
      'invisible':true
    }
    this.service.update(updateObj).subscribe();
  }
}
