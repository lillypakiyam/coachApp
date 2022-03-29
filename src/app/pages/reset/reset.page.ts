import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { UtilService } from 'src/app/providers/util/util.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {

  public email:string;
  public newPass:string;
  public code:string;
  public switch:boolean = false;

  constructor(private router: Router,
              private routes: ActivatedRoute,
              private util: UtilService) {
                
               }

  ngOnInit() {
  }

  reset(){
    if(this.util.validateEmail(this.email)){
      Auth.forgotPassword(this.email).then((data) => {
        this.errorHandling('Verificaton Code send to your mail');
        this.switch = !this.switch;
      }).catch(err => { console.log(err); this.errorHandling('Cannot able to connect :)') })
    }else{
      this.errorHandling('Email is incorrect');
    }
  }

  set(){
    Auth.forgotPasswordSubmit(this.email, this.code, this.newPass).then((val) => {
      this.errorHandling('New Password is set.');
      this.util.goToRoot('/signin');
    }).catch(err => { console.log(err); this.errorHandling('Code (or) password is wrong!!');  this.switch = !this.switch;});
  }

  async errorHandling(errorMsg:string){
    const toast = await this.util.createToastElement(errorMsg, 'bottom');
    await toast.present();
 }

 navigateSignin(){
  this.util.goToRoot('/signin');
 }

}
