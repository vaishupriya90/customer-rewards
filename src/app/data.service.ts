import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  data = [
    {
      custid: 1,
      name: "Vaishu",
      amt: 120,
      transactionDt: "03-01-2019"
    },
    {
      custid: 1,
      name: "Vaishu",
      amt: 75,
      transactionDt: "04-21-2019"
    },
    {
      custid: 1,
      name: "Vaishu",
      amt: 200,
      transactionDt: "05-01-2019"
    },
    {
      custid: 1,
      name: "Vaishu",
      amt: 224,
      transactionDt: "05-21-2019"
    },
    {
      custid: 2,
      name: "Kalai",
      amt: 125,
      transactionDt: "03-01-2019"
    },
    {
      custid: 2,
      name: "Kalai",
      amt: 75,
      transactionDt: "04-21-2019"
    },
    {
      custid: 2,
      name: "Kalai",
      amt: 224,
      transactionDt: "05-21-2019"
    },
    {
      custid: 3,
      name: "Diya",
      amt: 120,
      transactionDt: "04-21-2019"
    },
    {
      custid: 3,
      name: "Diya",
      amt: 200,
      transactionDt: "03-01-2019"
    },
    {
      custid: 3,
      name: "Diya",
      amt: 224,
      transactionDt: "05-21-2019"
    },{
      custid: 4,
      name: "Priya",
      amt: 768,
      transactionDt: "04-21-2019"
    },
    {
      custid: 4,
      name: "Priya",
      amt: 198,
      transactionDt: "03-01-2019"
    },
    {
      custid: 4,
      name: "Priya",
      amt: 500,
      transactionDt: "05-21-2019"
    }
    
    
]

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
      let monthName = this.months[monthInNumber];
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
