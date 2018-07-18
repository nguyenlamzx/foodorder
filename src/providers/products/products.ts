import { Injectable } from '@angular/core';

import { Product } from '../../models/product';
import { Api } from '../api/api';

@Injectable()
export class Products {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/items', params);
  }

  add(item: Product) {
  }

  delete(item: Product) {
  }

}
