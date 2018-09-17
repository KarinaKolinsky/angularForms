import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  public regForm = new FormGroup({
    name: new FormControl(''),
    gender: new FormControl(''),
    city: new FormControl('', Validators.required),
    newsletter: new FormControl('')
  });

  constructor() {
  }

  ngOnInit() {
  }

}
