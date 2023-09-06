import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  public products: Array<any>;
  constructor(private apiService: ApiService) { 
    this.products = [];
  }

  async ngOnInit() {
    try {
      let data: any = await this.apiService.doGet('/products');
      console.log('success ==> ', data);
      this.products = data.products;
    } catch(error: any){
      alert(JSON.stringify(error));
    }
  }

}
