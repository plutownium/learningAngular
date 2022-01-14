import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() hero!: string;
  @Input('master') masterName = ''; // tslint:disable-line: no-input-rename
  customers: Customer[] = [
 
    {customerNo: 1, name: 'Rahuld Dravid', address: '', city: 'Banglaore', state: 'Karnataka', country: 'India'},
    {customerNo: 2, name: 'Sachin Tendulkar', address: '', city: 'Mumbai', state: 'Maharastra', country: 'India'},
    {customerNo: 3, name: 'Saurrav Ganguly', address: '', city: 'Kolkata', state: 'West Bengal', country: 'India'},
    {customerNo: 4, name: 'Mahendra Singh Dhoni', address: '', city: 'Ranchi', state: 'Bihar', country: 'India'},
    {customerNo: 5, name: 'Virat Kohli', address: '', city: 'Delhi', state: 'Delhi', country: 'India'},
 
  ]

  @Output() someMagicEvent = new EventEmitter<number>();
  @Output() subtraction = new EventEmitter<number>();

  signalAddOne(sth: string) {
    // TODO: let user use a number input to change from 1-5 (but not 6) to add per click
    const convertedInteger: number = +sth;
    this.someMagicEvent.emit(convertedInteger);
  }

  signalSubtract() {
    this.subtraction.emit(); // always subtract 1 or 5 or sth
  }
}