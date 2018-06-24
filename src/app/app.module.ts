import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { TabsPage } from '../pages/tabs/tabs';
import { NewOrdersPage } from '../pages/new-orders/new-orders';
import { PendingOrdersPage } from '../pages/pending-orders/pending-orders';
import { FinalizedOrdersPage } from '../pages/finalized-orders/finalized-orders';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseMethodsProvider } from '../providers/database-methods/database-methods';

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
    TabsPage,
    NewOrdersPage,
    PendingOrdersPage,
    FinalizedOrdersPage,
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
    TabsPage,
    NewOrdersPage,
    PendingOrdersPage,
    FinalizedOrdersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseMethodsProvider
  ]
})
export class AppModule {}
