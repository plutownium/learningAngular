import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent implements OnInit {
  @Input()
  title: string;

  constructor() { 
    console.log("dashboard component")
  }
  
  
  ngOnInit(): void {
  }

}
