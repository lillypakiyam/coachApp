import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { CoachComponent } from './coach.component';
import { FormsModule } from '@angular/forms';

const routes:Routes =[ 
  {
    path: 'coach',
    component: CoachComponent
  }
];

@NgModule({
  declarations: [CoachComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [CoachComponent]
})
export class CoachModule { }
