import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "https://jsonplaceholder.typicode.com/photos";
  constructor(private httpClient: HttpClient) { }

  public get(start: string, limit: string) {
    const options = { params: new HttpParams().set('_start', start).set('_limit',limit) };
    return this.httpClient.get(this.SERVER_URL,options);
  }

  public post (data : any){
    return this.httpClient.post(this.SERVER_URL,data)
  }
}
