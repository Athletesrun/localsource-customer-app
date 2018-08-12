import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Config } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { BusinessPage } from '../business/business';
import { Business2Page } from '../business2/business2';
import { SearchPage } from '../search/search';

import { FadeTransition } from '../../transitions/fadeTransition';

/**
 * Generated class for the DiscoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html',
})
export class DiscoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public config: Config) {

  }

  public openBusinessPage() {
    this.navCtrl.push(BusinessPage)
  }

  public openProfilePage() {
    this.navCtrl.push(ProfilePage);
  }

  public loadSearch() {
    this.navCtrl.push(SearchPage);
  }

  public openBusiness2Page() {
    this.navCtrl.push(Business2Page)
  }

}
