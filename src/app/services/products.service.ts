import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = {
    accounts: [{
        id: 1,
        alias: 'Personal account',
        type: 'Current account',
        balance: 23422.00,
        currency: '€'
      },
      {
        id: 2,
        alias: 'Family account',
        type: 'Current account',
        balance: 12000.00,
        currency: '€'
      }
    ],
    cards: [
      {
        id: 1,
        alias: 'Credit card',
        number: '*1234',
        type: 'credit',
        provider: 'visa',
        currency: '€',
        balances: {
          available: 800,
          disposed: 1200
        }
      }
    ]
  };

  constructor() { }

  get productList() {
    return this.products;
  }
}
