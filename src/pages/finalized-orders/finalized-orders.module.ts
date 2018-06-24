import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinalizedOrdersPage } from './finalized-orders';

@NgModule({
  declarations: [
    FinalizedOrdersPage,
  ],
  imports: [
    IonicPageModule.forChild(FinalizedOrdersPage),
  ],
})
export class FinalizedOrdersPageModule {}
