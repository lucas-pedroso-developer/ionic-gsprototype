import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { NotificationPage } from '../notification/notification';

/**
 * Generated class for the BidsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bids',
  templateUrl: 'bids.html',
})
export class BidsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BidsPage');
  }

  goToHomePage(){
    this.navCtrl.setRoot(HomePage);
  }

  goToNotificationPage(){
    this.navCtrl.setRoot(NotificationPage);
  }

}
