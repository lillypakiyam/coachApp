import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninPageRoutingModule } from './signin-routing.module';

import { SigninPage } from './signin.page';
import { PlayerModule } from '../../components/player/player.module';
import { CoachModule } from '../../components/coach/coach.module';
import { MedicsModule } from '../../components/medics/medics.module'; 
import { StaffsModule } from '../../components/staffs/staffs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninPageRoutingModule,
    PlayerModule,
    CoachModule,
    MedicsModule,
    StaffsModule
  ],
  declarations: [SigninPage]
})
export class SigninPageModule {}
