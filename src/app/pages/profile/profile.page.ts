import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public user: any;
  public showOverlay: boolean = false;
  public showGuide1: boolean = false;
  public showGuide2: boolean = false;
  public lang: string = "EN";
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: (data: any) => {
        // console.log(data);
      },
    },
  ];

  public alertInputs = [
    {
      label: 'English',
      type: 'radio',
      value: 'EN',
    },
    {
      label: 'Bahasa Malaysia',
      type: 'radio',
      value: 'MY',
    }
  ];
  
  constructor(private storage: Storage) { 
    this.user = {
      name: "Amin Daud",
      role: "CEO",
      imageURL: "https://likhowithpride.com/site/assets/files/1108/opulent-profile-square-07.jpg",
      account_type: "Beginner"
    }
  }

  setLanguage(ev: any) {
    // console.log(ev);
    this.lang = ev.detail.data.values;
  }
  
  guide1Click(){
    this.showGuide1 = false;
    this.showGuide2 = true;
  }

  async guide2Click(){
    this.showGuide2 = false;
    this.showOverlay = false;
    //save data in local storage so it won't show again
    await this.storage.set('FIRST_TIME', true);
  }

  async ngOnInit() {
    await this.storage.create();
    // await this.storage.clear();
    let firstTimeLoading: any = await this.storage.get('FIRST_TIME');
    //check data in local storage to show guide
    if(!firstTimeLoading) {
      this.showOverlay = true;
      this.showGuide1 = true;
    }
  }

  ionViewWillLeave(){
    // alert('keluar dari page profile');
  }

}
