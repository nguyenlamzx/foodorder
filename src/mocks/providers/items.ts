import { switchMap } from 'rxjs/operators';
import { Observable, BehaviorSubject, empty, combineLatest } from 'rxjs';
import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { ITEMS } from '../data/items';

@Injectable()
export class Items {

  private items$: Observable<any[]>;

  private name$: BehaviorSubject<string|null>;
  private type$: BehaviorSubject<string|null>;
  private items: Item[] = [];

  constructor() {
    for (let item of ITEMS) {
      this.items.push(new Item(item));
    }

    this.name$ = new BehaviorSubject("");
    this.items$ = this.name$.pipe(
      switchMap(
        name => this.query({ name })
      )
    );
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
    return groups;
  }

  /**
   * params:
   *  param1=paramValue
   *  paramValue
   */
  query(params?: any):Observable<Item[]> {
    return Observable.create((observer) => {
      if (!params) {
        return observer.next(this.items);
      }
      return observer.next(this.items.filter((item) => {
        for (let key in params) {
          let field = item[key];
          if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
            return item;

          } else if (field == params[key]) {
            return item;
          }
        }
        return null;
      }));
    });
  }

  queryForSearch() {
    return this.items$;
  }

  search(name):any {
    this.name$.next(name);
  }

  update(itemID, data) {
    let indexFound = -1;
    const itemFound = this.items.filter((item, index) => {
      if (item.id === itemID) {
        indexFound = index;
        return item;
      }
      return null;
    })[0];

    this.items[indexFound] = Object.assign(itemFound, data);
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
