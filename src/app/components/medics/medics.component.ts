import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { UtilService } from 'src/app/providers/util/util.service';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-medics',
  templateUrl: './medics.component.html',
  styleUrls: ['./medics.component.scss'],
})
export class MedicsComponent implements OnInit {

  public club = {
    email: '',
    password: ''
  };

  constructor(private api: APIService,
              private util: UtilService) { 
    console.log('3');
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
        this.api.GetMedicsdb(id).then((result) => {
          console.log(result);
        }).catch(err => console.log(err));
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
