import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Config } from 'ionic-angular';

import { BusinessPage } from '../business/business';
import { Business2Page } from '../business2/business2';
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

  private buttonIsEnabled: boolean = false;

  private searching: boolean = false;

  public defaultPageTransition: string = '';

  public searchSuggestions: string[] = [
    'RESTAURANTS',
    'FASHION',
    'COFFEE',
    'GROCERIES',
    'TECH',
    'FITNESS',
    'MUSIC',
    'HOME & GARDEN',
    'CANNABIS',
    'ART & GIFT'
  ];

  public searchSuggestionsLC: string[] = [
    'Restaurants',
    'Fashion',
    'Coffee',
    'Groceries',
    'Tech',
    'Fitness',
    'Music',
    'Home & Garden',
    'Cannabis',
    'Art & Gift'
  ];

  public searchResults: object[] = [
    // {
    //   image: "assets/imgs/sanitas.png",
    //   name: "Sanitas Brewing Co.",
    //   description: "Handmade beers, crafted with organic and local ingredients",
    //   latitude: 40.021483935126376,
    //   longitude: -105.24737836327405
    // },
    // {
    //   image: "assets/imgs/logo.png",
    //   name: "Ice Cream Bro's",
    //   description: "Tasty local ice cream"
    // }
    {
      name: "Haven",
      image: "havenClothing.png",
      description: "Home goods store in Boulder, CO",
      latitude: 40.018993,
      longitude: -105.273721
    },
    {
      name: "Cedar & Hyde Mercantile",
      image: "cedar_store.jpg",
      description: "Offbeat family-run shop featuring an eclectic array of high-quality clothing, home decor & gifts.",
      latitude: 40.017664,
      longitude: -105.282971
    },
    {
      name: "Two Sole Sisters",
      image: "two_soles.jpg",
      description: "This shabby-chic boutique selling women's shoes also features jewelry, handbags & accessories.",
      latitude: 40.019417,
      longtitude: -105.273219
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public config: Config) {
    console.log(this.searchHistory);
  }

  ionViewCanEnter() {
    this.defaultPageTransition = this.config.get('pageTransition');
    this.config.set('pageTransition', 'wp-transition');
  }
  
  ionViewDidLeave() {
    this.config.set('pageTransition', this.defaultPageTransition);
  }

  public getSearchResults() {
    return this.searchResults;
  }

  public runSearch(event) {
    console.log("run");
    if(this.searchInput.length === 0) {
      this.buttonIsEnabled = false;
      this.searching = false;
    } else {
      this.buttonIsEnabled = true;
      this.searching = true;
    }
  }

  public getSearchHistory() {
    return this.searchHistory;
  }

  public openBusinessPage() {
    this.navCtrl.push(BusinessPage);
  }

  public openBusiness2Page() {
    this.navCtrl.push(Business2Page);
  }

  public getSuggestion(index) {
    return this.searchSuggestionsLC[index];
  }

  public searchItem(item) {
    this.searching = true;
    this.searchInput = item;
    this.buttonIsEnabled = true;
  }

  public viewResultsOnMap() {
    if(this.searching) {
      this.navCtrl.push(MapPage, {
        locations: this.searchResults,
        searchQuery: this.searchInput
      });
    }
  }

  public exitSearch() {
    this.navCtrl.pop();
  }

}
