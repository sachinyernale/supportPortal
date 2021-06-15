import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RaiseTicketService {

  constructor(private httpClient:HttpClient) { 
  }

  raiseTicket(data){
    return this.httpClient.post(environment.baseURL+"saveTicket",data)
  }

  resolveTicket(ticketId){
  var data;
    return this.httpClient.put(environment.baseURL+"updateticket?ticketId="+ticketId+"&status=resolved",data)
  }

}
