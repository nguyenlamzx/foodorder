import { LoginPage } from './../login/login';
import { MainPage } from './../index';
import { Component, AfterContentInit, OnInit, AfterViewChecked, AfterContentChecked, OnChanges, DoCheck, AfterViewInit, OnDestroy, SimpleChanges} from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';
import { User } from '../../providers';
import { Subscription, Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage implements 
OnChanges, OnInit, DoCheck,
AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked,
OnDestroy {

  ngOnInit(): void {
    console.log("ListMasterPage ngOnInit");
  }
  ngAfterContentInit(): void {
    console.log("ListMasterPage ngAfterContentInit");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ListMasterPage  ngOnChanges");
  }
  ngDoCheck(): void {
    console.log("ListMasterPage ngDoCheck");
  }
  ngAfterContentChecked(): void {
    console.log("ListMasterPage ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("ListMasterPage ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ListMasterPage ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("ListMasterPage ngOnDestroy");
  }
  public currentItems: Item[];

  private itemsObservable: Observable<Item[]>;
  private itemsObserver: Subscription;
  
  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    public items: Items,
    public user: User,
  ) {
    this.itemsObservable = this.items.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
    this.itemsObserver = this.itemsObservable.subscribe(items => {
      this.currentItems = items;
    });
  }

  onFilter() {
    // this.itemsObserver.unsubscribe();
    // this.itemsObserver = this.items.query({}).subscribe(items => {
    //   this.currentItems = items;
    // });
  }

  ionViewWillUnload(){
    this.itemsObserver.unsubscribe();
  }

  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');

    addModal.onDidDismiss(item => {
      if(item) {
        this.items.add(item);
      }
    });
    addModal.present();
  }

  deleteItem(item) {
    this.items.delete(item);
  }
  viewItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item,
    })
  }

  logout() {
    this.user.signOut().then(
      () => this.navCtrl.setRoot(LoginPage),
    );
  }

}
