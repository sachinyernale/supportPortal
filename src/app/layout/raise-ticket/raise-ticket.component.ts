import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RaiseTicketService } from './raise-ticket.service';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {
  
  submitted = false;
  

  State: any = [
    { id: 1, name: "India" },
    { id: 2, name: "Afghanistan" },
    { id: 3, name: "Australia" }
  ]

  City: any = [
    { id: 1, name: "Herat", state: "Afghanistan" },
    { id: 2, name: "Kabul", state: "Afghanistan" },
    { id: 3, name: "Kandahar", state: "Afghanistan" },
    { id: 4, name: "Mumbai", state: "India" },
    { id: 5, name: "Pune", state: "India" },
    { id: 6, name: "Bangalore", state: "India" },
    { id: 7, name: "Chennai", state: "India" },
    { id: 8, name: "Adelaide", state: "Australia" },
    { id: 9, name: "Melbourne", state: "Australia"},
    { id: 10, name: "Mascot", state: "Australia" },
  ]

  selectedState : any = "";
  selectedCity : any = "";
 

  dropdownCity: any = [];
  isView: boolean;
  isTicketId: boolean;
  raiseTicketForm: FormGroup;
  isAdmin: boolean;
  ticketId: any;

 

  populateCity(value) {
    this.dropdownCity = this.City.filter(i => i.state == value);
  }
 



  constructor(private toastr:ToastrService,private activatedRoute:ActivatedRoute,private router:Router,private raiseTicketService:RaiseTicketService) { 
    
    this.raiseTicketForm = new FormGroup({
      subject: new FormControl('', Validators.required),
      country: new FormControl(''),
      state: new FormControl(''),
      creator: new FormControl(''),
      description:new FormControl('',Validators.required),
      status:new FormControl(''),
      user_id:new FormControl(localStorage.getItem('user_id'))
    })

    if(localStorage.getItem('userName')=='admin'){
      this.isAdmin=true;
    }
    
  }

  ngOnInit(): void {
    

    this.activatedRoute.queryParams.subscribe(params => {    
      this.raiseTicketForm.controls['subject'].setValue(params.subject);
      this.raiseTicketForm.controls['creator'].setValue(params.creator);
      this.raiseTicketForm.controls['description'].setValue(params.description);
      this.selectedState=params.country;
      // this.selectedCity=params.state;
      this.raiseTicketForm.controls['state'].setValue(params.state);
      this.selectedCity=params.state;
      this.ticketId=params.ticketId;
      
      
      
      if(params.isView){
         this.isView=true; 
         this.isTicketId=true;
         
         
      } else if (!params.isView && params.ticketId){
        this.isView=false;
        this.isTicketId=true;
        
      }
          
          
  });
    
  }
  
  get f() { return this.raiseTicketForm.controls; }

  onSubmit() {  
    if (!this.raiseTicketForm.valid) {
      this.toastr.error("Please fill mandatory fields")
    } else { 
      this.raiseTicketForm.value.status="open";
      this.raiseTicketService.raiseTicket(this.raiseTicketForm.value).subscribe(success1 => {
        var success: any = success1;
        this.toastr.success(success)
      });
      this.toastr.success("Ticket Raised")
      this.router.navigate(['/viewticket'])
    } 
  }

  update(){
   
    this.raiseTicketService.resolveTicket(this.ticketId).subscribe(success1 => {
      var success: any = success1;
      this.toastr.success(success.message);
      this.router.navigate(['/viewticket']);
    });
  }


  cancel(){
    this.router.navigate(['/viewticket']);
  }


}
