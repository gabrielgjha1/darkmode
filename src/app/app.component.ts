import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  public checkDarkTheme(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(prefersDark);
  }
}

