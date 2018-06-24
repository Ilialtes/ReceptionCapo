import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
/**
 * Generated class for the PendingOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pending-orders',
  templateUrl: 'pending-orders.html',
})
export class PendingOrdersPage {

  pendingOrders: Observable<any[]>;
  more: Boolean = false;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.pendingOrders = db.list('orders').valueChanges();
    this.pendingOrders.subscribe();
  }

  finish(id){
    this.db.list('orders').update(id, {state:"finished"})
  }

  showMore(){
    if(!this.more){
      this.more = true;
    }else{
      this.more = false;
    }
    
  }

}
