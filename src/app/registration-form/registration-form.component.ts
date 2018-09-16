import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  public user: User = new User();
  public agb = false;

  constructor() {
  }

  public onSubmit() {
    console.log(`User registriert: ${this.user.name}, ${this.user.gender}, ${this.user.city}, ${this.user.newsletter}`);
    this.resetData();
  }

  private resetData() {
    this.user = new User();
    this.agb = false;
  }
}
