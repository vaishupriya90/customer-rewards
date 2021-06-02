import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DataService } from './data.service';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerItemComponent } from './customer/customer-list/customer-item/customer-item.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    TransactionComponent,
    CustomerDetailComponent,
    CustomerItemComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
