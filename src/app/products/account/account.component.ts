import {Component, Input, OnInit} from '@angular/core';
import {AccountModel} from '../../models/account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  balanceType: string;

  @Input() account: AccountModel;

  constructor() { }

  ngOnInit() {
    if (this.account.type === 'Current account') {
      this.balanceType = 'Available';
    }
  }

}
