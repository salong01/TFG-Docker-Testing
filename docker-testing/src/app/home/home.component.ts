import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';

interface OS{
  value: String
  viewValue: String
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  
  startDate = new Date(1990, 0, 1);
  name: String;
  lastName: String;
  date: Date;
  email:String;
  community: String;
  city: String;
  postalCode: String;
  socialNet: String;
  opSys: String;
  
  os: OS[] = [
    {value: 'android', viewValue: 'Android'},
    {value: 'ios', viewValue: 'IOS'},
    {value: 'windows', viewValue: 'Windows mobile'},
  ]

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
}
  constructor(private dataService: DataService) { }
}
