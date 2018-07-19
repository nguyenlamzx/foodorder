import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

import uuid from "uuid/v1";

@Injectable()
export class Items {

  private items: Item[] = [];

  public defaultItem: any = {
    "id": uuid(),
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
    "vote": 0,
  };

  constructor() {
    let items = [
      {
        "id": uuid(),
        "name": "Burt Bear",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Burt is a Bear.",
        "vote": 0,
      },
      {
        "id": uuid(),
        "name": "Charlie Cheetah",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Charlie is a Cheetah.",
        "vote": 1,
      },
      {
        "id": uuid(),
        "name": "Donald Duck",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Donald is a Duck.",
        "vote": 6,
      },
      {
        "id": uuid(),
        "name": "Eva Eagle",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Eva is an Eagle.",
        "vote": 0,
      },
      {
        "id": uuid(),
        "name": "Ellie Elephant",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Ellie is an Elephant.",
        "vote": 7,
      },
      {
        "id": uuid(),
        "name": "Molly Mouse",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "Molly is a Mouse.",
        "vote": 0,
      },
      {
        "id": uuid(),
        "name": "Paul Puppy",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Paul is a Puppy.",
        "vote": 0,
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
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
