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
    console.log("Datas: "+this.dataservice.data);
  }

  ngOnInit(){
    this.sort();
    this.calculateRewardsPerMonth(this.customerDetails[0]);
  }

  sort(){
    let newValue = this.datas.reduce((prev:{custid: number,name: string,amt: number,
      transactionDt: string}, cur:{custid: number,name: string,amt: number,transactionDt: string}) => {
      //console.log("prev:"+JSON.stringify(prev));
      //console.log("curr:"+JSON.stringify(cur));
      //console.log("Customer details: "+JSON.stringify(this.customerDetails));
      const index = this.customerDetails.findIndex(v => v.customerId === cur.custid);
      //console.log("Curr Index:"+index);
      if (index === -1) {
        this.customerDetails.push(new Customer(cur.name,cur.custid,new Transaction(cur.amt,cur.transactionDt)));
      } else {
        this.customerDetails[index].transactionDetail.push(new Transaction(cur.amt,cur.transactionDt));
      }
      //console.log("Customer details: "+JSON.stringify(this.customerDetails));
      if(prev===null)
        return cur;
      return prev;
  },null);
  console.log(this.customerDetails)
  }

  calculateRewards(price) {
    if (price >=50 && price < 100) {
        return price-50;
    } else if (price >100){
        return (2*(price-100) + 50);
    }
    return 0;
  }
  calculateRewardsPerMonth(eachCustomer){
    
    let transactionPerMonth = {};
    let rewardsPerMonth = {};
    let transactionDetailOfTheCustomer = eachCustomer.transactionDetail;
      for(let i=0;i < transactionDetailOfTheCustomer.length;i++){
        let element = transactionDetailOfTheCustomer[i];
        let date = new Date(element.transactionDate);
        let monthInNumber = date.getMonth();
        let monthName = this.dataservice.months[monthInNumber];
        if(transactionPerMonth[monthName]){
          transactionPerMonth[monthName]=transactionPerMonth[monthName] + element.transactionAmount;
          rewardsPerMonth[monthName]= rewardsPerMonth[monthName] + this.calculateRewards(element.transactionAmount);
          
          console.log(transactionPerMonth[monthName]);
        }else{
          transactionPerMonth[monthName] = element.transactionAmount;
          rewardsPerMonth[monthName]= this.calculateRewards(element.transactionAmount);
        }     
      }
      console.log('Transaction Per Month: ' + JSON.stringify(transactionPerMonth));
      console.log('Rewards Per Month: ' + JSON.stringify(rewardsPerMonth));
    return transactionPerMonth;

  }
  

  calculateTotalRewards(transactionDetails){
    let totalRewards = 0;
    for(let i=0;i< transactionDetails.length ;i++){
      let amountSpent = (transactionDetails[i].transactionAmount);
      let rewardsEarnedForThisTransaction = this.calculateRewards(amountSpent);
      totalRewards += rewardsEarnedForThisTransaction;
    }
    return totalRewards;
  }
}

        