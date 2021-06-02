import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Customer } from '../../customer.model';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.css']
})
export class CustomerItemComponent implements OnInit {

  @Input() customer : Customer;
  @Output() customerSelected = new EventEmitter<void>();
 
   constructor(private dataservice : DataService) { 
     this.dataservice = dataservice;
   }
 
   ngOnInit(): void {
   }
 
   onSelectItem(){
     this.customerSelected.emit();
 
   }

   totalPoints(customer : Customer){
     let points = this.dataservice.calculateTotalRewards(customer.transactionDetail);
     return points;
   }
 

}
