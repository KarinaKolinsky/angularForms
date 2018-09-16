import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  public user: User;

  constructor() { }

}
