import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  messForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router:Router) { this.messForm = this.formBuilder.group({
      
    email: ['', [Validators.required, Validators.email]],
    
  
}
);}
    ngOnInit() {
   } 
  
  
  
   
  get f() { return this.messForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.messForm.invalid) {     
        return;
    }

    // display form values on success
    this.router.navigate(['/user-profile']);
}
 

}
