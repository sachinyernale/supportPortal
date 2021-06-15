import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  registerUser(data){
    return this.httpClient.post(environment.baseURL+"saveUser",data)
  }

  getUserDetails(data){
    return this.httpClient.get(environment.baseURL+"getUser?userName="+data)
  }

}
