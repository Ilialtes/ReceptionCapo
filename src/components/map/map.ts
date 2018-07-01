import { Component, ViewChild, ElementRef, NgZone, Input } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular'
import firebase from 'firebase';
/**
 * Generated class for the MapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

  @Input('lat') lat: any;
  @Input('lng') lng: any;

  autocompleteService: any;
  placesService: any;
  query: string = '';
  places: any = [];
  searchDisabled: boolean;
  saveDisabled: boolean;
  location: any;
  markerPosition: any;
  apiKey: string = "AIzaSyBw1mUcpttda1-G92daM8lRomydSDyWCcY";
  marker: any;
  map:google.maps.Map;
  latLng : any;

  constructor(
    public zone: NgZone,
    public platform: Platform,
    public geolocation: Geolocation) {


  }

  ngOnInit() {
    this.initMap()
  }

  initMap(){
    console.log(this.lat)
   
    let mapProp = {
      center: new google.maps.LatLng(this.lat, this.lng),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProp);
    this.latLng =
    this.initMarker();
  }


  initMarker() {
    let self = this;
      self.latLng = new google.maps.LatLng(this.lat, this.lng);
    
    this.marker = new google.maps.Marker({
      map: this.map,
      draggable: true,   
      position: self.latLng
    });
    this.marker.setPosition(self.latLng);
  }

}
