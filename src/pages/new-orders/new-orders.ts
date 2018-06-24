import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable, iif } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import {DatabaseMethodsProvider} from '../../providers/database-methods/database-methods'

/**
 * Generated class for the NewOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-orders',
  templateUrl: 'new-orders.html',
})
export class NewOrdersPage {

  newOrders: Observable<any[]>;
  more: Boolean = false;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public dbMethods: DatabaseMethodsProvider) {
    this.newOrders = db.list('orders').valueChanges();
    this.newOrders.subscribe();

  }

  acept(id){
    this.db.list('orders').update(id, {state:"pending"})
  }

  reject(id){
    this.db.list('orders').update(id, {state:"reject"})
  }

  showMore(){
    if(!this.more){
      this.more = true;
    }else{
      this.more = false;
    }
    
  }

}
