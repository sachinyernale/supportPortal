import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RaiseTicketService {

  constructor(private httpClient:HttpClient) { 
  }

  raiseTicket(data){
    return this.httpClient.post("http://3.215.184.68:8090/saveTicket",data)
  }

  resolveTicket(ticketId){
  var data;
    return this.httpClient.put("http://3.215.184.68:8090/updateticket?ticketId="+ticketId+"&status=resolved",data)
  }

}
