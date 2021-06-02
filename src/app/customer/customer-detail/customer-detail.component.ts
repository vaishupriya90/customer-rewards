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
  rewardPointsPerMonth = {};


  constructor(private dataservice : DataService) { 
    this.dataservice = dataservice;
  }

  ngOnInit(): void {
  }
  calculateRewards(price) {
    if (price >=50 && price < 100) {
        return price-50;
    } else if (price >100){
        return (2*(price-100) + 50);
    }
    return 0;
  }

  totalPoints(customer){
    let points = this.dataservice.calculateTotalRewards(customer.transactionDetail);
    return points;
  }

  pointsForEachMonth(customer : any){
    let pointsPerMonth = this.dataservice.calculateRewardsPerMonth(customer);
    // return JSON.stringify(pointsPerMonth);
    this.rewardPointsPerMonth = pointsPerMonth;
  }

}
