import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { JPush } from 'ionic-native';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  registrationId: string;

  constructor(
    public navCtrl: NavController,
    public platform: Platform
  ) {}

  ngOnInit() {
    this.jPushDemo();
  }

  jPushDemo() {
    this.platform.ready().then(() => {
      if (this.platform.is('android') || this.platform.is('ios')) {
        this.jPushGetRegistrationId();
        document.addEventListener("jpush.openNotification", event => {
          this.navCtrl.push(ContactPage);
        }, false);
      }
    });
  }

  jPushGetRegistrationId() {
    (window as any).setTimeout(() => {
      JPush.getRegistrationID().then(registrationId => {
        if (registrationId.length === 0) {
          (window as any).setTimeout(this.jPushGetRegistrationId, 1000);
        } else {
          this.registrationId = registrationId;
        }
      });
    }, 1000);
  }

}
