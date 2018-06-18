import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import {DatabaseMethodsProvider} from '../../providers/database-methods/database-methods'
import { Observable } from 'rxjs';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  name : String = "";
  items: Observable<any[]>;
  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.items = db.list('users').valueChanges();
    this.items.subscribe();
  }

}
