import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public h1Text: string;
  public finalPrice: any = null;

  public price: any = null;
  public sst: any = null;
  public isAlertOpen: boolean = false;
  public alertButtons: Array<any> = ['OK'];
  public errMsg: string = '';
  public student: any
  constructor() {
    this.h1Text = 'Please click the button above';
    this.student = {
      name: "Arafat Ahmad",
      role: "Student",
      imageURL: "https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg",
      account_type: "Pro"
    }
  }

  calculateSST(){

    if(this.sst > 100){
      this.errMsg = 'Invalid SST amount. It should be less than 100%';
      this.setOpen(true);
      return;
    }

    this.finalPrice = Number(this.price) + Number(this.price * (this.sst/100));
    this.finalPrice = (this.finalPrice).toFixed(2);
  }

  setOpen(openAlert: boolean){
    this.isAlertOpen = openAlert;
  }

  reset(){
    this.price = null;
    this.sst = null;
    this.finalPrice = null;
  }
  

  btnClick(){
    alert('Hello KKR!');
    this.h1Text = 'Welcome to KKR!';
    var text: string = 'abc';
    let text2: string;
    if(text == 'abc'){
      text2 = '123'
      var text3: string;
    }
    text3 = '456';
  }

  btn2(){
    // text3 = 'wqe';
    this.h1Text = '1234';

    this.btnClick();
  }

}
