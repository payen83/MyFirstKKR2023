import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user: any;
  public showEye: boolean;
  constructor(
    private apiService: ApiService, 
    private router: Router,
    private data: DataService
    ) { 
    this.showEye = false;
    this.user = {
      username: "yraigatt3",
      password: "sRQxjPfdS"
    }
  }

  async doLogin(){
    try {
      let response: any = await this.apiService.doPost('/auth/login', this.user)
      if(response){
        await this.data.setStorage('USER', response);
        this.router.navigateByUrl('/products');
      }
    } catch(error: any){
      alert('Login error: '+ error.message);
    }
  }

  revealPassword(){
    this.showEye = !this.showEye;
  }

  ngOnInit() {
  }

}
