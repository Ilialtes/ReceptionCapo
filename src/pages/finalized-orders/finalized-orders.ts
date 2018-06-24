import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
/**
 * Generated class for the FinalizedOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-finalized-orders',
  templateUrl: 'finalized-orders.html',
})
export class FinalizedOrdersPage {

  finishedOrders: Observable<any[]>;
  more: Boolean = false;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.finishedOrders = db.list('orders').valueChanges();
    this.finishedOrders.subscribe();
  }

  showMore(){
    if(!this.more){
      this.more = true;
    }else{
      this.more = false;
    }
  }
}
