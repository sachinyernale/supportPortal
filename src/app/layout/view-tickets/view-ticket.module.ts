import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewTicketRoutingModule } from './view-ticket-routing.module';
import { ViewTicketsComponent } from './view-tickets.component';



@NgModule({
  declarations: [ViewTicketsComponent],
  imports: [
    CommonModule,
    ViewTicketRoutingModule
  ]
})
export class ViewTicketModule { }
