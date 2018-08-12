import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BusinessPage } from '../business/business';
import { MapPage } from '../map/map';

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

  public searchSuggestions: string[] = [
    'Restaurant',
    'Fashion',
    'Cafe\'s',
    'Groceries',
    'Tech',
    'Entertainment'
  ]

  public searchResults: object[] = [
    {
      image: "assets/imgs/sanitas.png",
      name: "Sanitas Brewing Co.",
      description: "Handmade beers, crafted with organic and local ingredients",
      latitude: 40.021483935126376,
      longitude: -105.24737836327405
    },
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
    console.log(this.searchHistory);
  }

  public getSearchResults() {
    return this.searchResults;
  }

  public runSearch(event) {
    console.log("run");
    if(this.searchInput.length === 0) {
      this.searching = false;
    } else {
      this.searching = true;
    }
  }

  public getSearchHistory() {
    return this.searchHistory;
  }

  public openBusinessPage() {
    this.navCtrl.push(BusinessPage);
  }

  public getSuggestion(index) {
    return this.searchSuggestions[index];
  }

  public searchItem(item) {
    this.searching = true;
    this.searchInput = item;
  }

  public viewResultsOnMap() {
    this.navCtrl.push(MapPage, this.searchResults);
  }

}
