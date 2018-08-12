import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-business',
  templateUrl: 'business.html',
})
export class BusinessPage {

  customerServiceCount = 22;
  customerServiceShouldInc = true;
  customerServiceIncrement(event){
    if(this.customerServiceShouldInc){
      this.customerServiceCount++;
      event.target.classList.remove("b-class");
      event.target.classList.add("a-class");
    } 
    else {
      this.customerServiceCount--;
      event.target.classList.remove("a-class");
      event.target.classList.add("b-class");
    } 

    this.customerServiceShouldInc = !this.customerServiceShouldInc;
  }

  qualityCount = 13;
  qualityShouldInc = true;
  qualityIncrement(event){
    if(this.qualityShouldInc){
      this.qualityCount++;
      event.target.classList.remove("b-class");
      event.target.classList.add("a-class");
    } 
    else {
      this.qualityCount--;
      event.target.classList.remove("a-class");
      event.target.classList.add("b-class");
    } 

    this.qualityShouldInc = !this.qualityShouldInc;
  }

  pricingCount = 9;
  pricingShouldInc = true;
  pricingIncrement(event){
    if(this.pricingShouldInc){
      this.pricingCount++;
      event.target.classList.remove("b-class");
      event.target.classList.add("a-class");
    } 
    else {
      this.pricingCount--;
      event.target.classList.remove("a-class");
      event.target.classList.add("b-class");
    } 

    this.pricingShouldInc = !this.pricingShouldInc;
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessPage');
  }

}
