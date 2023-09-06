import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(
    private data: DataService,
    private navCtrl: NavController
    ) {}

  async ngOnInit() {
    let data_: any = await this.data.getStorage('USER');
    console.log('data =>', data_);
    if(data_){
      this.navCtrl.navigateRoot('/products');
    } 
  }
}
