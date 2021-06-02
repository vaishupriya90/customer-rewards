import { CurrencyPipe } from '@angular/common';
import { createAotUrlResolver } from '@angular/compiler';
import { Component, Injectable, OnInit } from '@angular/core';
import { Customer } from './customer/customer.model';
import { DataService } from './data.service';
import { Transaction } from './transaction/transaction.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'rewards-program';
  rewardPoints = 0;
  datas = [];
  customerDetails:Customer[]= [];

  constructor(private dataservice : DataService) {
    this.dataservice = dataservice;
    this.datas = this.dataservice.data;
  }

  ngOnInit(){}

    
}

        