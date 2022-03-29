import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { StaffsComponent } from './staffs.component';
import { FormsModule } from '@angular/forms';

const routes:Routes =[ 
  {
    path: 'staffs',
    component: StaffsComponent
  }
];


@NgModule({
  declarations: [StaffsComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [StaffsComponent]
})
export class StaffsModule { }
