import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  template: `<ion-app>
    <ion-router-outlet />
  </ion-app>`,
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
