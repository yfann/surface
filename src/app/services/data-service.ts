import { Injectable } from '@angular/core';
import { JsonHttpProvider } from './json-http';
@Injectable()
export class DataServiceProvider {
    constructor(public http: JsonHttpProvider) {
    }

   search(desc:string){
     return this.http.get('http://localhost:5000/jiaoyou?s='+desc);
   }
}