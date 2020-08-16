import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

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
  SocialNet: String;
  os: OS[] = [
    {value: 'android', viewValue: 'Android'},
    {value: 'ios', viewValue: 'IOS'},
    {value: 'windows', viewValue: 'Windows mobile'},
  ]
  constructor(private dataService: DataService) { }
}
