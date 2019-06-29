import { Injectable } from '@angular/core';
import { JsonHttpProvider } from './json-http';
@Injectable()
export class DataServiceProvider {
    constructor(public http: JsonHttpProvider) {
    }

   search(desc:string,hasPhoto:boolean){
     return this.http.get('http://localhost:5000/jiaoyou?s='+desc+'&p='+hasPhoto);
   }

   getAll(){
    return this.http.get('http://127.0.0.1:5000/jiaoyou/all');
  }

  update(item){
    return this.http.post('http://localhost:5000/jiaoyou/up',item);
  }
}