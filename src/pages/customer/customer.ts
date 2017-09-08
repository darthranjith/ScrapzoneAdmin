import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {
  addcustomertab: string;
  managecustomertab: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.addcustomertab = 'AddCustomerPage';
    this.managecustomertab = 'ManageCustomerPage';
  }
}
