import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  name : String;

  constructor(name : String) { 
    this.name = name;
  }

  ngOnInit(): void {
  }

}
