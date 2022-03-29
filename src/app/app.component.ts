import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { UtilService } from './providers/util/util.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private plt: Platform,
              private util: UtilService) {
    this.initializeApp();
    this.util.goToRoot('/signin')
  }


  initializeApp(){
    this.plt.ready().then(() => {
      StatusBar.setStyle({
        style: Style.Light
      }).catch(err => console.log(`Err ${err}`));
    
    if(this.plt.is('android')){
      StatusBar.setOverlaysWebView({
        overlay: false
      }).catch(err => console.log(`Err ${err}`));
      StatusBar.setBackgroundColor({
        color:'#8ca2aa'
      }).catch(err => console.log(`Err ${err}`));
    }
    SplashScreen.hide();
   })
  }
}
