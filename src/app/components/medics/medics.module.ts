import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { MedicsComponent } from './medics.component';
import { FormsModule } from '@angular/forms';

const routes:Routes =[ 
  {
    path: 'medics',
    component: MedicsComponent
  }
];


@NgModule({
  declarations: [MedicsComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [MedicsComponent]
})
export class MedicsModule { }
