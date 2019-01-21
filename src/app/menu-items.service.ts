import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {
  menuRef: AngularFireList<any> = null;
  MenuItems: Observable<any[]>;

  constructor(private firestore: AngularFirestore, private db: AngularFireDatabase) {
    this.menuRef = db.list('menu/38_barracks/');
  }

  getMenuList() {
    return this.menuRef.valueChanges();
    }
  }
