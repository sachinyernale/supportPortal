import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  registerUser(data){
    return this.httpClient.post("http://3.215.184.68:8090/saveUser",data)
  }

  getUserDetails(data){
    return this.httpClient.get("http://3.215.184.68:8090/getUser?userName="+data)
  }

}
