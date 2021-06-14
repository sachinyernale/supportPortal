import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { routerTransition } from '../../router.animations';


@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {
    updateForm: FormGroup;
    submitted: boolean;
    isView: boolean;
    operationStartTime:any;
    operationEndTime:any;
    differenceInTime: number;
    constructor(private formBuilder: FormBuilder,public router:Router, public activatedRoute:ActivatedRoute,public toastr:ToastrService){
        this.updateForm = this.formBuilder.group({
            title: ['', Validators.required],
            price: ['', Validators.required],
            id: ['', Validators.required], 
        },);
         this.operationStartTime=new Date();
    }
    

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {     
            if(params.isView){
               this.isView=true;
            }
                this.updateForm.controls['id'].setValue(params.id);
                this.updateForm.controls['title'].setValue(params.title);
                this.updateForm.controls['price'].setValue(params.price);
        });
        
        
    }
    get f() { return this.updateForm.controls; }
    onSubmit() {
        this.submitted = true;
        if (this.updateForm.invalid) {
            return;
        }
        // alert('SUCCESS!! Updated succefully :-)\n\n' + JSON.stringify(this.updateForm.value, null, 4));
        this.toastr.success('SUCCESS!! Updated succefully');
        this.operationEndTime=new Date();
        this.differenceInTime = Math.round((this.operationEndTime - this.operationStartTime) / (60 * 24));
        this.toastr.info("Operation Completed in " +  this.differenceInTime + " seconds")
        this.router.navigate(['/userdata']);
    }

    back(){
        this.router.navigate(['/userdata']);
    }

    showToasterSuccess(){
        // this.notifyService.showSuccess("Data shown successfully !!", "ItSolutionStuff.com")
        this.toastr.success("Data !!")
    }
    
   
   
}
