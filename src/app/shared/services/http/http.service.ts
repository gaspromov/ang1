import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from './API';


@Injectable({
  providedIn: 'root'
})
export class HttpService extends API{
  headers = new HttpHeaders();

  constructor(
    http: HttpClient
  ) 
  {
    super(http)
  }
  
  async getItems(product){
    return await this.get(`${product}`, this.headers).toPromise();
  }
}
