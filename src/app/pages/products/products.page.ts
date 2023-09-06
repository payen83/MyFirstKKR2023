import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, LoadingController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  public products: Array<any>;
  public product: any;
  @ViewChild(IonModal) modal: IonModal | undefined;

  constructor(
    private apiService: ApiService,
    private loadingCtrl: LoadingController,
    private data: DataService,
    private navCtrl: NavController
  ) {
    this.products = [];
    this.product = {
      title: '',
      price: '',
      category: ''
    }
  }

  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal?.dismiss(this.product, 'confirm');
  }

  async onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if(ev.detail.role == 'confirm'){
      try {
        let response = await this.apiService.doPost('/products/add', this.product, true);
        if(response) {
          this.products.unshift({ ...this.product, thumbnail: 'assets/shapes.svg'} );
        }
      } catch(error: any) {
        alert(error.message);
      }
    }
  }


  async doLogout() {
    await this.data.clearStorage();
    this.navCtrl.navigateRoot('/login');
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
    } catch (error: any) {
      // await loading.dismiss(); 
      // alert(JSON.stringify(error));
    }
    await loading.dismiss();
  }

}
