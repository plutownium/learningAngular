import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  actualNumber = 0;

  addNumber(newValue: number) {
    // 
    this.actualNumber = this.actualNumber + newValue;
  }

  subtractOne() {
    //
    this.actualNumber = this.actualNumber - 1;
  }
}
