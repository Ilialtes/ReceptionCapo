import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import {DatabaseMethodsProvider} from '../../providers/database-methods/database-methods'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  newOrders: Observable<any[]>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public dbMethods: DatabaseMethodsProvider) {
    this.newOrders = db.list('orders').valueChanges();
    this.newOrders.subscribe();

  }

  getUserData(){
    
  }


}
