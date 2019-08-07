import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { strain } from './models/strain';

@Injectable({
  providedIn: 'root'
})
export class StrainService {



  constructor(private http: HttpClient) { }

  getStrains(url) {
    const baseUrl = 'http://localhost:3000/api';
    let response = this.http.get<any>(baseUrl.concat(url) ,{});
    return response;
  }

  getstrain(url, id) {
    let response = this.http.get<Array<strain>>(url + 'id', {  });

    return response
  }
}
