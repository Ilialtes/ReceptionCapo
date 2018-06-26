import { Component, ViewChild, ElementRef, NgZone, Input } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular'
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';
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

  constructor(
    public zone: NgZone,
    public maps: GoogleMapsProvider,
    public platform: Platform,
    public geolocation: Geolocation) {
   

  }

  ngAfterViewInit(){
    let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(() => {
      this.autocompleteService = new google.maps.places.AutocompleteService();
      this.placesService = new google.maps.places.PlacesService(this.maps.map);
      this.searchDisabled = false;
      this.setPosition();
    });

  }

  setPosition() {
    let position: any;
    this.geolocation.getCurrentPosition().then((pos) => {
      position = new google.maps.LatLng(this.lat, this.lng);
      this.maps.map.setCenter(position)
      this.maps.setMarker(position)
      this.markerPosition = position;
    });

  }

}
