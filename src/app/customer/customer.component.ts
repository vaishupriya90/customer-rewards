import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Transaction } from '../transaction/transaction.model';
import { Customer } from './customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerDetail : Customer;
  theSelectedCustomerItem:Customer;
  constructor() { }

  ngOnInit(): void {
  }
  onSelectCustomer(customer : Customer){
    this.customerDetail = customer;

  }

  



}
