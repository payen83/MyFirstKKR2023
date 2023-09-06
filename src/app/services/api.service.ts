import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    return new Promise((resolve, reject) => {
      this.httpClient.get(fullURL)
      .subscribe({
        next: (response: any) => { resolve(response) },
        error: (error: any) => { reject(error) }
      })
    });
  }

}
