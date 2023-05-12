import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public platform: Platform) {
    this.initializaApp();
  }

  public initializaApp(){
    this.platform.ready().then(()=>{
      this.checkDarkTheme();
    })
  }

  public checkDarkTheme(){

  }
  
}

