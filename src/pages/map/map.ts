import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import { Map } from 'mapbox-gl';
import { Business2Page } from '../business2/business2';

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
  private title: string = 'Map';

  private markers: object[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public elementRef:ElementRef) {
    this.title = "Results for " + navParams.data.searchQuery;
    this.locations = navParams.data.locations;
    console.log(this.locations);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

  ionViewWillUnload() {
    this.markers.forEach((marker:any) => {
      marker.element.parentNode.removeChild(marker.element);
    });
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
    let center = [-105.24730962508563, 40.01903255139988];
    let found = false;
    this.locations.forEach((item: any) => {
      if(item.longitude && item.latitude) {
        center[0] = item.longitude;
        center[1] = item.latitude;
      }
    });
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmVud2luZ2VydGVyIiwiYSI6ImNqZHFrZXdkOTB0MWMzM28zeDkweDY3cXIifQ.5ZkyFK5qfMvxJhcL3fePow';
    this.map = new mapboxgl.Map({
      center: [-105.273721, 40.018993],
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
      this.map.addControl(new mapboxgl.NavigationControl());

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

      this.map.on('load', function() {
        console.log("james");
      });

      this.locations.forEach((location: any) => {
        if(location.latitude && location.longitude) {
          // create a HTML element for each feature
          let el = document.createElement('div');
          el.className = 'marker';

          // make a marker for each feature and add to the map
          const markerPoint = new mapboxgl.Marker(el)
          .setLngLat([location.longitude, location.latitude])
          .addTo(this.map);

          this.markers.push({
            element: el,
            marker: markerPoint
          });
          el.addEventListener('click', this.clickMarker.bind(this));
        }
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

      //  this.map.on('click', function (e) {
      //   console.log(e)
      //   let features = this.map.queryRenderedFeatures(e.point, { layers: ['places'] });
      //   if (!features.length) return;
      //   //@todo push business page.
      //  });  
    })
  }

  clickMarker($event) {
    this.navCtrl.push(Business2Page);
  }

}
