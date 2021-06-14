import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private httpClient:HttpClient) { }

  getAll() {
    return this.httpClient.get('https://fakestoreapi.com/products')
    
  }
}
