import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DatabaseMethodsProvider} from '../../providers/database-methods/database-methods'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name : String = "";

  constructor(public navCtrl: NavController, public db: DatabaseMethodsProvider) {

  }


}
