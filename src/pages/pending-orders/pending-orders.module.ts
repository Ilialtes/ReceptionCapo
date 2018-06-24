import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingOrdersPage } from './pending-orders';

@NgModule({
  declarations: [
    PendingOrdersPage,
  ],
  imports: [
    IonicPageModule.forChild(PendingOrdersPage),
  ],
})
export class PendingOrdersPageModule {}
