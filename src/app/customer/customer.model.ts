import { Transaction } from "../transaction/transaction.model";

export class Customer{
    name : String;
    customerId : number;
    transactionDetail : Transaction[]=[];
  
    constructor(name : String,customerId:number, singleTransaction : Transaction) { 
      this.name = name;
      this.customerId = customerId;
      this.transactionDetail.push(singleTransaction);
    }
}