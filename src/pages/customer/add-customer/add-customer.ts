import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  LoadingController,
  ModalController
} from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { FirebaseProvider } from '../../../providers/firebase/firebase';

@IonicPage()
@Component({
  selector: 'page-add-customer',
  templateUrl: 'add-customer.html',
})
export class AddCustomerPage {

  addCustomerForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private fbPrvdr: FirebaseProvider,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) {
    this.addCustomerForm = this.formBuilder.group({
      Name: new FormControl('', Validators.required),
      Gender: new FormControl('Male', Validators.required),
      Email: new FormControl('', Validators.email),
      Cell: new FormControl('', Validators.required),
      Address: this.formBuilder.group({
        DoorNo: new FormControl('', Validators.required),
        FloorNo: new FormControl(''),
        ApartmentName: new FormControl(''),
        Street: new FormControl('', Validators.required),
        Landmark: new FormControl('', Validators.required),
        City: new FormControl('Bengaluru', Validators.required),
        State: new FormControl('Karnataka', Validators.required),
        Pin: new FormControl('', Validators.required)
      })
    });
  }

  addCustomer(form: any) {
    let loader = this.loadingCtrl.create({
      content: "Adding Customer..."
    });
    loader.present();
    this.fbPrvdr.addCustomer(form.value).then(data => {
      if (data) {
        loader.dismiss();
        this.addCustomerForm.reset();
        let toast = this.toastCtrl.create({
          message: 'Customer added successfully',
          duration: 3000
        });
        toast.present();
      }
    });
  }

  autoApartmentName(name: any) {
    this.fbPrvdr.getApartmentName(name).subscribe(data => {
      console.log(data);
    });
  }

}
