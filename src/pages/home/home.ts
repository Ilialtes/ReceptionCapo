import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public newState: string = 'new';
  public pendingState: string = 'pending';
  public rejectedState: string = 'rejected';
  public finishedState: string = 'finished';

  public newOrders: Observable<any[]>;
  public more: Boolean = false;
  public state: string = this.newState;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.newOrders = db.list('orders').valueChanges();
    this.newOrders.subscribe();
   
  }

  changeState(id, state: string){
    this.db.list('orders').update(id, {state:state})
  }

  changeList(state:string) {
    this.state = state;
    
  }

  // No sirvio solo haciendo click dos veces para q lo recargue el ngFor ;(
  // public getUser(order) {
  //   this.firebase.ref('users/' + order.UID).on("value", user => {
  //     order.user = user.val();
  //     order.address = this.getAddress(order);
  //  }, error => {
  //     alert("Hubo un error al cargar los datos del usuario con ID:" + order.UID + 
  //             "\n ErrorCode: " + error.code);
  //  });
  // }

  // private getAddress(order) {
  //   if(order.anotherAddress) {
  //     return order.anotherAddress;
  //   } else {
  //     return order.user.address;
  //   }
  // }

  showMore(){
    if(!this.more){
      this.more = true;
    }else{
      this.more = false;
    }
  }

}
