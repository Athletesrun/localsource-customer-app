import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  private searching: boolean = false;

  public searchItems = [
    {
      image: "assets/imgs/logo.png",
      name: "Ice Cream Bro's",
      description: "Tasty local ice cream"
    }
  ];

  public searchHistory: object[] = [
    {
      image: "assets/imgs/logo.png",
      name: "Jose's Mexican Restaurant",
      description: "Fresh and Local Mexican Food"
    }
  ]

  public searchInput: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  getItems(event) {
    if(this.searchInput.length === 0) {
      this.searching = false;
    } else {
      this.searching = true;
    }
  }

}
