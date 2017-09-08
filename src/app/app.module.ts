import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import * as firebase from 'firebase';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { FirebaseProvider } from '../providers/firebase/firebase';


export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDXj3jtAjDweoUllZT88cFyWeiY6vWwsVk',
    authDomain: 'scrapzone-240c7.firebaseapp.com',
    databaseURL: 'https://scrapzone-240c7.firebaseio.com',
    projectId: 'scrapzone-240c7',
    storageBucket: 'scrapzone-240c7.appspot.com',
    messagingSenderId: '1028772596345'
  }
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FirebaseProvider
  ]
})
export class AppModule { }
