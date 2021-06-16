import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ViewTicketService {
  URL: string;

  constructor(private httpClient:HttpClient) {
    // this.URL="http://35.175.209.6:8090/";
    this.URL="http://3.216.90.68:30556/"
   }

  getAllTickets(){
    return this.httpClient.get(this.URL+"getAllTickets")
  }

  getTicketsByUser(user_id){
    return this.httpClient.get(this.URL+"getTicketsById?userId=" +user_id)
  }
}
