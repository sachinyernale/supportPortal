import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from './userdata.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  productList:any=[];
 

  constructor(private userDataService:UserdataService,private router:Router) {
    this.userDataService.getAll().subscribe(success=>{
     this.productList=success
      console.log(JSON.stringify(this.productList))
    }) 


    
   }

  ngOnInit(): void {
  }

  edit(id,title,price){
    this.router.navigate(['/charts'],{ queryParams: { id: id, title:title,price:price }})
  }
  view(id,title,price){
    this.router.navigate(['/charts'],{ queryParams: { id: id, title:title,price:price,isView:true }})
  }
  addProduct(){
    this.router.navigate(['/charts'])
  }
  deleteProduct(){
    alert('sorry you can not delete this entry')
  }
}
