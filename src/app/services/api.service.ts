import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timeout } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL: string;
  constructor(
    private httpClient: HttpClient,
    private data: DataService
    ) { 
    this.baseURL ='https://dummyjson.com';
  }

  doGet(url: string){
    let fullURL: string = `${this.baseURL}${url}`; // equals to this.baseURL + url;
    // fullURL = 'https://nre.appsmalaya.com/warehouse/api/get-all-inventory';
    return new Promise((resolve, reject) => {
      this.httpClient.get(fullURL)
      .pipe(timeout(5000))
      .subscribe({
        next: (response: any) => { resolve(response) },
        error: (error: any) => { reject(error) }
      })
    });
  }

  async doPost(url: string, payload: any, isTokenRequired?: boolean){
    let fullURL: string = this.baseURL + url;
    let headers_: any = { 'Content-Type': 'application/json' };
    if(isTokenRequired){
      let userData: any = await this.data.getStorage('USER');
      console.log(userData);
      headers_ = { ...headers_, 'Authorization': `Bearer ${userData.token}`};
    }
    return new Promise((resolve, reject) => {
      this.httpClient.post(fullURL, JSON.stringify(payload), { headers: headers_ })
      .pipe(timeout(5000))
      .subscribe({
        next: (response: any) => { resolve(response) },
        error: (error: any) => { reject(error) }
      })
    });

  }

}
