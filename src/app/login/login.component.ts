import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
})
export class LoginComponent implements OnInit {
    submitted: boolean;
    userData: any={};
    constructor(public router: Router, private formBuilder: FormBuilder,private toastr:ToastrService,private loginService:LoginService ) { }
    loginForm: FormGroup;
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

     }

     changed(event){
      
        this.loginService.getUserDetails(event.target.value).subscribe(success1 => {
            var success: any = success1;
            this.userData = success;
            

          });
     }

    get f() { return this.loginForm.controls; }

    onLoggedin() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }
        else if((this.f.username.value==this.userData.userName) && (this.f.password.value==this.userData.password)){
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigate(['/dashboard']);
            this.toastr.success('Login successful !!');
            localStorage.setItem('userName',this.userData.userName);
            localStorage.setItem('user_id',this.userData.user_id);
            localStorage.setItem('firstName',this.userData.firstName);
        }else{
            
            this.toastr.error('Invalid Credentials')
        }

       
    }
}
