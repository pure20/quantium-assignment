import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  signInForm: UntypedFormGroup;

  constructor(
    private _formBuilder: UntypedFormBuilder,
    private _router: Router
  )
  {

  }

  ngOnInit(): void
  {
      // Create the form
      this.signInForm = this._formBuilder.group({
          email     : ['', [Validators.required, Validators.email]],
          password  : ['', Validators.required],
      });
  }

  login(): void
  {
    if ( this.signInForm.invalid )
    {
        return;
    }
    
    this._router.navigate(['/fund']);
  }
}
