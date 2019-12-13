import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fdata: any;
  results: any;
  submitted = false;
  emplye: any;
  searchText;
  fname1: any;
  lname1: any;
  msg: string;
  constructor(private s: DataService, private fb: FormBuilder, private router: Router) { }
  form = this.fb.group({
    id: [],
    fname: ['', Validators.required],
    password: ['', Validators.required]
  });
  ngOnInit() {

  }
  get f() { return this.form.controls; }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }
  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.fname1 = this.form.controls['fname'].value;
    this.lname1 = this.form.controls['password'].value;
    // this.s.ge().subscribe(res=>{
    //   this.fdata=res;
    // });
    if (this.fname1 == "admin" && this.lname1 == "admin") {
      this.router.navigate(['/', 'dash']);
      //alert('Login successful');
      this.s.sendToken(this.form.value.fname);
      this.delay(10000).then(any => {
        this.s.logout();
        this.router.navigate(['/', 'out']);
      });
    }
    else {
      //alert('Invalid credentials');
      this.msg = 'Invalid Credentials';
      this.form.reset();
      this.submitted = false;
    }

  }

}
