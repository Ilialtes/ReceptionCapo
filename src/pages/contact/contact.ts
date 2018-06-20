import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  pendingOrders: Observable<any[]>;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.pendingOrders = db.list('orders').valueChanges();
    this.pendingOrders.subscribe();
  }

  finish(id){
    this.db.list('orders').update(id, {state:"finished"})
  }

}
