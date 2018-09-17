import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  public regForm: FormGroup;
  constructor() { }

  ngOnInit() {
    regForm = new FormGroup({
      name: new FormControl(''),
      gender: new FormControl(''),
      city: new FormControl(''),
      newsletter: new FormControl('')
    });
  }

}
