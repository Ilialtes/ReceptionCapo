import { Injectable, Output, EventEmitter } from '@angular/core';
import { Platform } from 'ionic-angular';
import { MapsConectivityProvider } from '../maps-conectivity/maps-conectivity';
import { Geolocation } from '@ionic-native/geolocation';
import firebase from 'firebase';

/*
  Generated class for the GoogleMapsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GoogleMapsProvider {

  @Output() markerChanged = new EventEmitter();
  mapElement: any;
  pleaseConnect: any;
  map: any;
  mapInitialised: boolean = false;
  mapLoaded: any;
  mapLoadedObserver: any;
  currentMarker: any;
  apiKey: string = "AIzaSyBw1mUcpttda1-G92daM8lRomydSDyWCcY";
  marker: any;
  currentPosition : any;
  latLng : any;
  self : any;


  constructor(public connectivityService: MapsConectivityProvider,
    public geolocation: Geolocation) {
      // this.getUserOrDefaultLocation();
      this.self = this;
     }

  init(mapElement: any, pleaseConnect: any): Promise<any> {

    this.mapElement = mapElement;
    this.pleaseConnect = pleaseConnect;
    return this.loadGoogleMaps();
  }

  loadGoogleMaps(): Promise<any> {

    return new Promise((resolve) => {

      if (typeof google == "undefined" || typeof google.maps == "undefined") {
        console.log("Google maps JavaScript needs to be loaded.");
        //this.disableMap();
        if (this.connectivityService.isOnline()) {
          window['mapInit'] = () => {
            this.initMap().then(() => {
              resolve(true);
            });
            this.enableMap();
          }

          let script = document.createElement("script");
          script.id = "googleMaps";

          if (this.apiKey) {
            script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit&libraries=places';
          } else {
            script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
          }
          document.body.appendChild(script);
        }
      } else {
        if (this.connectivityService.isOnline()) {
          this.initMap();
          this.enableMap();
        }
        else {
          this.disableMap();
        }
        resolve(true);
      }
      this.addConnectivityListeners();
    });
  }

  getUserOrDefaultLocation(){
    let self = this;
    this.geolocation.getCurrentPosition().then((position) => {
      firebase.auth().onAuthStateChanged(user => {
          if(google){
            self.latLng = new google.maps.LatLng(10.0739464, -84.31475720000003);
          }
      });
    });
  }

  initMap(): Promise<any> {
    console.log("map init")
    this.mapInitialised = true;
    let self = this;

    return new Promise((resolve) => {
        let mapOptions = {
          center: self.latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        this.map = new google.maps.Map(this.mapElement, mapOptions);
        this.getUserOrDefaultLocation()
        resolve(true);
        this.initMarker(self.latLng);
    });
  }

  disableMap(): void {
    if (this.pleaseConnect) {
      this.pleaseConnect.style.display = "block";
    }
  }

  enableMap(): void {
    if (this.pleaseConnect) {
      this.pleaseConnect.style.display = "none";
    }
  }

  addConnectivityListeners(): void {
    this.connectivityService.watchOnline().subscribe(() => {
      setTimeout(() => {

        if (typeof google == "undefined" || typeof google.maps == "undefined") {
          this.loadGoogleMaps();
        }
        else {
          if (!this.mapInitialised) {
            this.initMap();
          }
          this.enableMap();
        }
      }, 2000);
    });

    this.connectivityService.watchOffline().subscribe(() => {
      this.disableMap();
    });
  }

  initMarker(latLng) {
    this.marker = new google.maps.Marker({
      map: this.map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: latLng
    });
    let self = this;
    this.marker.addListener('dragend', function(e){self.setCurrentPosition(e,self)});
  }

  setMarker(position) {
    this.marker.setPosition(position);
    this.markerChanged.emit(this.marker.position);
  }

  setCurrentPosition(event,self) {
    this.currentPosition = event.latLng;
    self.markerChanged.emit(event.latLng);
  }

}
