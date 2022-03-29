import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { UtilService } from 'src/app/providers/util/util.service';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss'],
})
export class CoachComponent implements OnInit {

  public club = {
    email: '',
    password: ''
  };

  team_id:string

  constructor(private api: APIService,
    private util: UtilService) {
    console.log('2')
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
        this.api.GetCoachdb(id).then((result) => {
          console.log(result);
          this.util.team_id = result.team_id
          this.util.uid = result.id
          console.log('teamid',this.util.team_id, this.util.uid);
          this.util.goToRoot('/calendar')
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
