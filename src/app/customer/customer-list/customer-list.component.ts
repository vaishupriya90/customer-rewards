import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Transaction } from 'src/app/transaction/transaction.model';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  datas = [];
  customerList : Customer[]=[];

  @Output() selectedCustomer = new EventEmitter<Customer>();

  constructor(private dataservice : DataService) {
    this.dataservice = dataservice;
    this.datas = this.dataservice.data; 
   }

  ngOnInit(){
    this.sort();
  }
    
  sort(){
    //console.log("entered sort")
      this.datas.forEach(cur => {
      const index = this.customerList.findIndex(v => v.customerId === cur.custid);
      //console.log("Curr Index:"+index);
      if (index === -1) {
        this.customerList.push(new Customer(cur.name,cur.custid,new Transaction(cur.amt,cur.transactionDt)));
      } else {
        this.customerList[index].transactionDetail.push(new Transaction(cur.amt,cur.transactionDt));
      }
  });
  console.log("Customer List: "+JSON.stringify(this.customerList))
  }

  onCustomerSelected(customer:Customer){
    this.selectedCustomer.emit(customer);
  }

}
