import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder,private dataService: ApiService, private router:Router) { this.registerForm = this.formBuilder.group({
    nom: ['', Validators.required],
   
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  
}
);}
    ngOnInit() {
   } 
  
  
  
   
  get f() { return this.registerForm.controls; }
  onSubmit(register1
    ) {
    this.submitted = true;

    // stop here if form is invalid
    //if (this.registerForm.invalid) {     
        //return;
   // }

    // display form values on success
    this.router.navigate(['/login']);
    this.dataService.userregistration(register1.value.nom,register1.value.email,register1.value.password)
    .pipe(first())
    .subscribe(
  
    
    error => {
    });
    }
    get name() { return this.registerForm.get('name'); }
    get email() { return this.registerForm.get('email'); }
    get password() { return this.registerForm.get('password'); }
   
  }
  
 
