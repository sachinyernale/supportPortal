import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login/login.service';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    submitted: boolean;
    constructor(public router: Router, private formBuilder: FormBuilder,private toastr:ToastrService,private loginService:LoginService ) { }
    registerForm: FormGroup;
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });

     }
     get f() { return this.registerForm.controls; }

    registerUser(){
        this.submitted = true;

        if (!this.registerForm.valid) {
            this.toastr.error("Please fill mandatory fields")
          } else { 
            
            this.loginService.registerUser(this.registerForm.value).subscribe(success1 => {
              var success: any = success1;
              this.toastr.success(success.message);
              this.router.navigate(['/login']);
            });
            
          } 
    }
}
