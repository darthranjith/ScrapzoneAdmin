import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageCustomerPage } from './manage-customer';

@NgModule({
  declarations: [
    ManageCustomerPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageCustomerPage),
  ],
  exports: [
    ManageCustomerPage
  ]
})
export class ManageCustomerPageModule {}
