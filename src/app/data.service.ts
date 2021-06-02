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
      transactionDt: "03-21-2019"
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
    }
]
}
