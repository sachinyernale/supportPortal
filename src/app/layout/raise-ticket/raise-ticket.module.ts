import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaiseTicketComponent } from './raise-ticket.component';
import { RaiseTicketRoutingModule } from './raise-ticket-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RaiseTicketComponent],
  imports: [
    CommonModule,
    RaiseTicketRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RaiseTicketModule { }
