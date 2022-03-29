import { Injectable } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  date:string;
  reDate:string;
  team_id:string
  uid:string;
  public clubid:string;
  constructor(private navCtrl: NavController,
              private toastCtrl: ToastController,
              private loadCtrl: LoadingController) { }

  validateEmail(email:string){
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email.toLowerCase());
  }

  goToRoot(page:string){
    this.navCtrl.navigateRoot([`${page}`]);
  }

  goForward(page:string){
    this.navCtrl.navigateForward([`${page}`]);
  }

  goBack(page:string){
    this.navCtrl.navigateBack([`${page}`]);
  }

  async createToastElement(message: string, position = 'bottom' as 'top' | 'bottom' | 'middle'): Promise<HTMLIonToastElement> {
    const toast = await this.toastCtrl.create({
      message,
      position,
      duration: 3000,
      mode: 'ios',
      color: 'dark',
      buttons: [{
        text: 'Done',
        role: 'cancel',
        handler: () => {}
      }]
    });
    return toast;
  }

  async createLoader(message:string): Promise<HTMLIonLoadingElement>{
    const loader = await this.loadCtrl.create({
      message: message,
      mode: 'ios',
      animated: true
    });

    return loader;
  }
}
