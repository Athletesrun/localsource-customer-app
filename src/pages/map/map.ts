import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
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

  private locations: object[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.locations = navParams.data;
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
      center: [-105.24730962508563, 40.01903255139988],
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
    ].map(d => {
      // this.map[d].disable()

      let features = [];

      const exampleFeature = {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            0,//lng, 
            0,//lat
          ]
        },
        "properties": {
          "title": "My Location",
          "description": "This is My Location!",
          "icon": "monument"
        }
      };

      this.locations.forEach(() => {
        
      });

      this.map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": features
          }
        }
       });

       this.map.on('click', function (e) {
        console.log(e)
        let features = this.map.queryRenderedFeatures(e.point, { layers: ['places'] });
        if (!features.length) return;
        //@todo push business page.
       });  
    })
  }

}
