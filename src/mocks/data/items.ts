import uuid from "uuid/v1";
import { Item } from '../../models/item';

export const ITEMS:Array<Item> = [
  {
    "id": uuid(),
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
    "vote": 0,
    "type": "animal"
  },
  {
    "id": uuid(),
    "name": "Charlie Cheetah",
    "profilePic": "assets/img/speakers/cheetah.jpg",
    "about": "Charlie is a Cheetah.",
    "vote": 1,
    "type": "animal"
  },
  {
    "id": uuid(),
    "name": "Donald Duck",
    "profilePic": "assets/img/speakers/duck.jpg",
    "about": "Donald is a Duck.",
    "vote": 6,
    "type": "bird"
  },
  {
    "id": uuid(),
    "name": "Eva Eagle",
    "profilePic": "assets/img/speakers/eagle.jpg",
    "about": "Eva is an Eagle.",
    "vote": 0,
    "type": "bird"
  },
  {
    "id": uuid(),
    "name": "Ellie Elephant",
    "profilePic": "assets/img/speakers/elephant.jpg",
    "about": "Ellie is an Elephant.",
    "vote": 7,
    "type": "animal"
  },
  {
    "id": uuid(),
    "name": "Molly Mouse",
    "profilePic": "assets/img/speakers/mouse.jpg",
    "about": "Molly is a Mouse.",
    "vote": 0,
    "type": "animal"
  },
  {
    "id": uuid(),
    "name": "Paul Puppy",
    "profilePic": "assets/img/speakers/puppy.jpg",
    "about": "Paul is a Puppy.",
    "vote": 0,
    "type": "animal"
  }
];
