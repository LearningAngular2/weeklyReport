import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { patternValidator  } from '../pattern-validator';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginBtn = false;
  hide = true;

  constructor(public router: Router, public snackBar: MatSnackBar) { }
    ngOnInit() { 
      this.createForm();
    }
    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 4000,
      });
    }
    private createForm(){
      this.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl('', Validators.required),
    });
  }

  public login() {
    console.log(this.loginForm.value);
    if(this.loginForm.value.email == "admin@wipro.com" && this.loginForm.value.password == "abc"){
      this.router.navigate(['./dashboard']);
    }
    else{
      this.openSnackBar("Sorry Invalid Login", "Done");
    }
  }

}


