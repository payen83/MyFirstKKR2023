import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  public products: Array<any>;
  constructor(
    private apiService: ApiService,
    private loadingCtrl: LoadingController) { 
    this.products = [];
  }

  async ngOnInit() {
    const loading: any = await this.loadingCtrl.create({
      message: 'Please wait',
      spinner: 'circles'
    });
    await loading.present();

    try {
      let data: any = await this.apiService.doGet('/products');
      console.log('success ==> ', data);
      this.products = data.products;
    } catch(error: any){
      // await loading.dismiss(); 
      // alert(JSON.stringify(error));
    }
    await loading.dismiss();
  }

}
