import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL: string;

  constructor(private httpClient:HttpClient) { 
    // this.URL="http://35.175.209.6:8090/"
    this.URL="http://52.201.117.114:8090/"
  }

  registerUser(data){
    return this.httpClient.post(this.URL+"saveUser",data)
  }

  getUserDetails(data){
    return this.httpClient.get(this.URL+"getUser?userName="+data)
  }

}
