import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';
import { ProfilePage } from './profile.page';
import { TranslatePipe } from 'src/app/pipes/translate.pipe';
import { UserComponentModule } from 'src/app/components/user/user.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    UserComponentModule
  ],
  declarations: [ProfilePage, TranslatePipe]
})
export class ProfilePageModule {}
