import { Component, AfterContentInit, OnInit, AfterViewChecked, AfterContentChecked, OnChanges, DoCheck, AfterViewInit, OnDestroy, SimpleChanges} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage implements 
  OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  item: any;

  constructor(
    public navCtrl: NavController,
    private items: Items,
    navParams: NavParams,
  ) {
    this.item = navParams.get('item') || items.defaultItem;
  }


  ngOnInit(): void {
    console.log("ItemDetailPage ngOnInit");
  }
  ngAfterContentInit(): void {
    console.log("ItemDetailPage ngAfterContentInit");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ItemDetailPage  ngOnChanges");
  }
  ngDoCheck(): void {
    console.log("ItemDetailPage ngDoCheck");
  }
  ngAfterContentChecked(): void {
    console.log("ItemDetailPage ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("ItemDetailPage ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ItemDetailPage ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("ItemDetailPage ngOnDestroy");
  }


  doFavorite() {
    const { id: itemID, vote } = this.item;
    this.items.update(itemID, { vote: vote + 1 });
  }

}
