import { Component } from '@angular/core';

/**
 * Generated class for the ReceptionCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'reception-card',
  templateUrl: 'reception-card.html'
})
export class ReceptionCardComponent {

  text: string;

  constructor() {
    console.log('Hello ReceptionCardComponent Component');
    this.text = 'Hello World';
  }
  aceptOrder() {

  }
  
  rejectOrder() {
  
  }
}
