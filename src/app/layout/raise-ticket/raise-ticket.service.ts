import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RaiseTicketService {
  URL: string;

  constructor(private httpClient:HttpClient) { 
  // this.URL="http://35.175.209.6:8090/";
  this.URL="http://aa945be7be7ce4ab5b9ac3c679036641-1528928763.us-east-1.elb.amazonaws.com:8090/"
  }

  raiseTicket(data){
    return this.httpClient.post(this.URL+"saveTicket",data)
  }

  resolveTicket(ticketId){
  var data;
    return this.httpClient.put(this.URL+"updateticket?ticketId="+ticketId+"&status=resolved",data)
  }

}
