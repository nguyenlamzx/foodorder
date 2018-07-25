import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers';
import { DEFAULT } from 'models/item';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {

  item: any;

  constructor(
    public navCtrl: NavController,
    private items: Items,
    navParams: NavParams,
  ) {
    this.item = navParams.get('item') || DEFAULT;
  }

  doFavorite() {
    const { id: itemID, vote } = this.item;
    this.items.update(itemID, { vote: vote + 1 });
  }

}
