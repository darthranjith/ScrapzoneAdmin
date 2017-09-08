import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, MenuController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { FirebaseProvider } from '../../providers/firebase/firebase';

import { DashboardPage } from "../dashboard/dashboard";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private menuCtrl: MenuController,
    private fbPrvdr: FirebaseProvider
  ) {
    this.loginForm = this.formBuilder.group({
      Email: new FormControl('iam@varanjith.com', Validators.required),
      Password: new FormControl('R@njith7788', Validators.required)
    });
  }
  ionViewDidLoad() {
    this.menuCtrl.enable(false);
  }
  ionViewDidLeave() {
    this.menuCtrl.enable(true);
  }
  doLogin(form: any) {
    let loader = this.loadingCtrl.create({
      content: "Logging in..."
    });
    loader.present();

    this.fbPrvdr.login(form.value.Email, form.value.Password).then(data => {
      if (data) {

        this.fbPrvdr.checkAdmin(data.uid).subscribe(res => {
          if (res.$value == true) {
            this.navCtrl.setRoot(DashboardPage);
            loader.dismiss();
          }
          else {
            let alert = this.alertCtrl.create({
              title: 'Error!',
              subTitle: 'Not an admin',
              buttons: ['OK']
            });
            alert.present();
            alert.onDidDismiss(() => {
              loader.dismiss();
              this.navCtrl.setRoot(LoginPage);
            })
          }
        })
      }
    }, err => {
      loader.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Error!',
        subTitle: 'Invalid Username/Password',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.setRoot(LoginPage);
    });



  }

}
