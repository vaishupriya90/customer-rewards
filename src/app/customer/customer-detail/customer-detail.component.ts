import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  
  @Input() customerDetail: Customer;


  constructor(private dataservice : DataService) { 
    this.dataservice = dataservice;
  }

  ngOnInit(): void {
  }

  totalPoints(customer){
    let points = this.dataservice.calculateTotalRewards(customer.transactionDetail);
    return points;
  }

  pointsForEachMonth(customer){
    let pointsPerMonth = this.dataservice.calculateRewardsPerMonth(customer);
    return pointsPerMonth;
  }

}
