import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';
import {} from '@types/googlemaps';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';

import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { MapsConectivityProvider } from '../providers/maps-conectivity/maps-conectivity';
import {MapComponent} from '../components/map/map';

var firebaseConfig = {
  apiKey: "AIzaSyBw1mUcpttda1-G92daM8lRomydSDyWCcY",
  authDomain: "il-capo-app.firebaseapp.com",
  databaseURL: "https://il-capo-app.firebaseio.com",
  projectId: "il-capo-app",
  storageBucket: "il-capo-app.appspot.com",
  messagingSenderId: "946746956474"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoogleMapsProvider,
    MapsConectivityProvider,
    Network,
    Geolocation,
    GoogleMapsProvider,
    MapsConectivityProvider
  ]
})
export class AppModule {}
