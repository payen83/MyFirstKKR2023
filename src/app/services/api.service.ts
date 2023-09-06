import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL: string;
  constructor(private httpClient: HttpClient) { 
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

}
