import { Component } from '@angular/core';


import { NewOrdersPage } from '../new-orders/new-orders';
import { PendingOrdersPage } from '../pending-orders/pending-orders';
import { FinalizedOrdersPage } from '../finalized-orders/finalized-orders';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NewOrdersPage;
  tab2Root = FinalizedOrdersPage;
  tab3Root = PendingOrdersPage;

  constructor() {

  }
}
