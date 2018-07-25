import toArray from "lodash/toArray";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable, Subscription } from 'rxjs';

import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems:Item[];
  public currentGroups: any[];

  private itemsObservable: Observable<Item[]>;
  private itemsObserver: Subscription;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public items: Items,

  ) {
    this.itemsObservable = this.items.queryForSearch();
    this.itemsObserver = this.itemsObservable.subscribe(items => {
      this.currentItems = items;
      if () {
        
      }
      let groups = this.groupBy(this.currentItems);
      this.currentGroups = groups;

      // switchMap layout list ? empty() : this.groupBy(this.currentItems);
    });
   }

  groupBy(items):any {
    let groups = {};
    items.forEach((item) => {
      let group = groups[item.type];
      if (!group) {
        group = {
          type: item.type,
          items: [],
        };
        groups[item.type] = group;
      }
      group.items.push(item);
    })
    return toArray(groups);
  }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value.trim();

    this.items.search(val);
    // this.itemsObserver.unsubscribe();
    // this.itemsObservable = this.items.query({
    //   name: val
    // });
    // this.itemsObserver = this.itemsObservable.subscribe(items => {
    //   this.currentItems = items;
    // });
  }

  ionViewWillUnload(){
    this.itemsObserver.unsubscribe();
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item,
    });
  }

}
