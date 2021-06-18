import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ViewTicketService {
  URL: string;

  constructor(private httpClient:HttpClient) {
    // this.URL="http://35.175.209.6:8090/";
    this.URL="http://aa945be7be7ce4ab5b9ac3c679036641-1528928763.us-east-1.elb.amazonaws.com:8090/"
   }

  getAllTickets(){
    return this.httpClient.get(this.URL+"getAllTickets")
  }

  getTicketsByUser(user_id){
    return this.httpClient.get(this.URL+"getTicketsById?userId=" +user_id)
  }
}
