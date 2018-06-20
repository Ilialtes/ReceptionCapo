import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the DatabaseMethodsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseMethodsProvider {
   db :any;
  constructor() {

    // var firebaseConfig = {
    //   apiKey: "AIzaSyBw1mUcpttda1-G92daM8lRomydSDyWCcY",
    //   authDomain: "il-capo-app.firebaseapp.com",
    //   databaseURL: "https://il-capo-app.firebaseio.com",
    //   projectId: "il-capo-app",
    //   storageBucket: "il-capo-app.appspot.com",
    //   messagingSenderId: "946746956474"
    // };
    // firebase.initializeApp(firebaseConfig);
    this.db = firebase.database();
  }

  setDocument(collection, documentID, data) {
    this.db.ref(collection + '/' + documentID).set(data);
  }

  getDocument(collection, documentID):any {
    return this.db.ref(collection + '/' + documentID)
  }

  updateDocument(collection, documentID, data) {
    this.db.ref(collection + '/' + documentID).set(data);
  }

  insertIfDontExist(collection, documentID, data) {
    
    let self = this;
    this.db.ref(collection + '/' + documentID)
    .on('value', function(snapshot){
      if(!snapshot.val()){
        console.log('No existe')
        self.setDocument(collection, documentID, data);
      }
    });
  }

}