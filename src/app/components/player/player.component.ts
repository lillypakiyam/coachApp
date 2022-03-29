import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { UtilService } from 'src/app/providers/util/util.service';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {

  public club = {
    email: '',
    password: ''
  };

  public code:string;
  public switch:boolean = false;

  constructor(private api: APIService,
              private util: UtilService) { 
    console.log('1');
  }

  ngOnInit() {}

  save(){
    const check = this.util.validateEmail(this.club.email);
    if(check && this.club.password.length  > 4){
      Auth.signIn({
        username: this.club.email,
        password: this.club.password,
      }).then((result) => {
        const id = result.attributes.sub;
        this.api.GetPlayerdb(id).then((result) => {
          console.log(result);
        });
      }).catch(err => {
        console.log(err.code);
        this.errorHandling(err.message);
      });
    }else{
      this.errorHandling('Invalid Userame (or) Password');
    }
  }

  async errorHandling(errorMsg:string){
    const toast = await this.util.createToastElement(errorMsg, 'bottom');
    await toast.present();
  }

  navReset(){
    this.util.goToRoot('/reset')
  }

  

  

  
}
