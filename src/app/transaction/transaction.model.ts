export class Transaction{
    transactionDate : Date;
    transactionAmount : number;
  
    constructor(transactionAmount : number,transactionDate) { 
      this.transactionDate = transactionDate ;
      this.transactionAmount = transactionAmount;
    }
  }