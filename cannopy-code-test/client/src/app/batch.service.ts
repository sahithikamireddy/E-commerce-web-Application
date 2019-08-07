import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Batch } from './models/batch';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor(private http: HttpClient) { }

  getBatches(url) {
    const baseUrl = 'http://localhost:3000/api';
    let response = this.http.get<any>(baseUrl.concat(url) ,{});
    return response;
  }

  getBatch(url, id) {
    let response = this.http.get<Array<Batch>>(url + 'id', {  });

    return response
  }
}
