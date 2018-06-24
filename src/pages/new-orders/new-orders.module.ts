import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewOrdersPage } from './new-orders';

@NgModule({
  declarations: [
    NewOrdersPage,
  ],
  imports: [
    IonicPageModule.forChild(NewOrdersPage),
  ],
})
export class NewOrdersPageModule {}
