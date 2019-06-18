import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the JsonHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JsonHttpProvider {

  constructor(public http: HttpClient) {
    console.log('Hello JsonHttpProvider Provider');
  }

  get(url: string) {
    console.log(`GET ${url}`);
    return this.http.get(url).map(res => res['data']);
  }

  post(url: string, data) {
    console.log(`POST ${url}`);
    return this.http.post(url, data).map(res => res['data']);
  }
}
