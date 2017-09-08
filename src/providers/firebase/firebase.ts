import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class FirebaseProvider {

  constructor(
    public http: Http,
    private db: AngularFireDatabase,
    private auth: AngularFireAuth
  ) {
  }

  checkAdmin(uid) {
    return this.db.object('/adminmaster/' + uid + '/isAdmin');
  }

  login(email, password) {
    return this.auth.auth.signInWithEmailAndPassword(email, password);
  }

  addCustomer(form: any) {
    return this.db.list('CustomerMaster').push(form);
  }

  getApartmentName(filter: string) {
    this.db.list('CustomerMaster', {
      query: {
        orderByChild: 'Address/ApartmentName'
      }
    })
      .map(items => {
        console.log(items);

        //const filtered = items.filter(item => item)
      })
  }

}
