import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators ,NgForm} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Router } from '@angular/router';

import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router:Router ,private dataService: ApiService ) { this.loginForm = this.formBuilder.group({
      
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  
}

);}

    ngOnInit() {
   } 
  
  
  
   
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {     
        return;
    }

    // display form values on success
    this.router.navigate(['/dashboard']);
}
 
  

}
