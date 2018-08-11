import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { Map } from 'mapbox-gl';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

  @ViewChild('map') mapElement: ElementRef;

  map: Map;

  ngAfterViewInit() {
    try {
      this.initMap();
      console.log("init map");
    } catch(error) {
      console.log("failed");
      console.log(error);
    }
  }

  initMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmVud2luZ2VydGVyIiwiYSI6ImNqZHFrZXdkOTB0MWMzM28zeDkweDY3cXIifQ.5ZkyFK5qfMvxJhcL3fePow';
    this.map = new mapboxgl.Map({
      center: [40.00095794784809, -45.26631832122781],
      style: 'mapbox://styles/benwingerter/cjkq0c9fd2c0r2so7yvfwnlnk',
      zoom: 16,
      pitch: 0,
      minZoom: 7.5,
      maxZoom: 17,
      container: this.mapElement.nativeElement
    });

    [
      "scrollZoom",
      'boxZoom',
      'dragRotate',
      'dragPan',
      'keyboard',
      'doubleClickZoom',
      'touchZoomRotate'
    ].map(d => this.map[d].disable())
  }

  onMapReady(ev) {
    console.log("map ready");
    console.log(ev);
  }

}
