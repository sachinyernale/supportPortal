import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewTicketService {

  constructor(private httpClient:HttpClient) { }

  getAllTickets(){
    return this.httpClient.get("http://3.215.184.68:8090/getAllTickets")
  }

  getTicketsByUser(user_id){
    return this.httpClient.get("http://3.215.184.68:8090/getTicketsById?userId=" +user_id)
  }
}
