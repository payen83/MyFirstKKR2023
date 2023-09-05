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

  constructor(private storage: Storage) { 
    this.user = {
      name: "Amin Daud",
      role: "CEO",
      imageURL: "https://likhowithpride.com/site/assets/files/1108/opulent-profile-square-07.jpg",
      account_type: "Beginner"
    }
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
    //check data in local storage to show guide
    let firstTimeLoading: any = await this.storage.get('FIRST_TIME');

    if(!firstTimeLoading) {
      this.showOverlay = true;
      this.showGuide1 = true;
    }
    // alert('baru masuk page profile');
  }

  ionViewWillLeave(){
    // alert('keluar dari page profile');
  }

}
