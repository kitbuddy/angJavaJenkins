import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallDataService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  constructor(public httpClient: HttpClient) { }

  get_products(): Observable<any>{
    return this.httpClient.get(this.baseUrl + '');
  }
}
