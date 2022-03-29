import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './player.component';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  {
    path: 'player',
    component: PlayerComponent
  }
];


@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [PlayerComponent]
  
})
export class PlayerModule { }
