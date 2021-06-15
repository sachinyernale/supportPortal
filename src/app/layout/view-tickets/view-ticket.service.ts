import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewTicketService {

  constructor(private httpClient:HttpClient) { }

  getAllTickets(){
    return this.httpClient.get(environment.baseURL+"getAllTickets")
  }

  getTicketsByUser(user_id){
    return this.httpClient.get(environment.baseURL+"getTicketsById?userId=" +user_id)
  }
}
