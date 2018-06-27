import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserRegistrationViewModel } from '../../viewmodels/userregistration.viewmodel';
import { UserService } from '../../services/user.service';

@Component({  
  selector: 'registration-form',
  templateUrl: './registration-form.component.html'
})
export class RegistrationFormComponent implements OnInit {

 errors: string;  
 isRequesting: boolean;
 submitted: boolean = false;
 
 constructor(private userService: UserService,private router: Router) { 
   
 }

  ngOnInit() {
          
  }

  registerUser({ value, valid }: { value: UserRegistrationViewModel, valid: boolean }) {
     this.submitted = true;
     this.isRequesting = true;
     this.errors='';
     if(valid)
     {
         this.userService.register(value.email,value.password,value.firstName,value.lastName,value.location)
                   .then(() => this.isRequesting = false)
                   .then(
                     result  => {if(result){
                         this.router.navigate(['/login'],{queryParams: {brandNew: true,email:value.email}});   
                     }},
                     errors =>  this.errors = errors);
     }      
  }  
}
