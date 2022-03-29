import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  public club = {
    email: '',
    password: ''
  };
  public tabs:string="player";

  constructor() { }

  ngOnInit() {
  }

  checkSignUp(){
    
  }

  segmentChange(ev:any){
    //console.log(ev.detail.value);
    this.tabs = ev.detail.value;
  }

}
