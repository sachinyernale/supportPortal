import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RaiseTicketService {
  URL: string;

  constructor(private httpClient:HttpClient) { 
  // this.URL="http://35.175.209.6:8090/";
  this.URL="http://3.216.90.68:30556/"
  }

  raiseTicket(data){
    return this.httpClient.post(this.URL+"saveTicket",data)
  }

  resolveTicket(ticketId){
  var data;
    return this.httpClient.put(this.URL+"updateticket?ticketId="+ticketId+"&status=resolved",data)
  }

}
