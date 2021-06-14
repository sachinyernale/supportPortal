import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewTicketService } from './view-ticket.service';

@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.css']
})
export class ViewTicketsComponent implements OnInit {
  ticketList:any=[];
  
  constructor(private router:Router,private viewTicketService:ViewTicketService) {
    

    

   }

  ngOnInit(): void {

    if(localStorage.getItem('user_id')=="1"){
      this.viewTicketService.getAllTickets().subscribe(success1 => {
        var success: any = success1;
       
        this.ticketList = success;
      });
    }else{
      this.viewTicketService.getTicketsByUser(localStorage.getItem('user_id')).subscribe(success1 => {
        var success: any = success1;
       
        this.ticketList = success;
      });
    }

  }

  editTicket(ticketId,country,state,description,creator,subject){
   
    this.router.navigate(['/raiseticket'],{ queryParams: { ticketId: ticketId,country:country,state:state,description:description,creator:creator,subject:subject }})
  }
  viewTicket(ticketId,country,state,description,creator,subject){
    this.router.navigate(['/raiseticket'],{ queryParams: { ticketId: ticketId,country:country,state:state,description:description,creator:creator,isView:true,subject:subject }})
  }

  refresh(){
this.ngOnInit()
  }

}
