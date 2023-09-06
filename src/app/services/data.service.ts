import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private storage: Storage) { 
    this.init();
  }

  async init(){
    await this.storage.create();
  }

  async getStorage(key: string){
    const data: any = await this.storage.get(key);
    return data;
  }

  async setStorage(key: string, value: any) {
    return await this.storage.set(key, value);
  }

  async clearStorage(){
    return await this.storage.clear();
  }

}
