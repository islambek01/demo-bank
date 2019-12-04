import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { ProductsService } from '../../services/products.service';
import {AccountModel} from '../../models/account.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: {
    accounts: AccountModel[]
  };

  constructor(productsService: ProductsService) {
    this.products = productsService.productList;
  }

  ngOnInit() {
  }

}
