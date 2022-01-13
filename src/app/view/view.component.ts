import { Component, OnInit,ViewChild,ElementRef, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @Input() message: string;

  @Output() changeTitleEvent: EventEmitter<string> = new EventEmitter();

  @ViewChild('titleField') titleField: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  handleBtnClick(someTitle: string) {
    if(someTitle){
      this.changeTitleEvent.emit(someTitle);
      this.titleField.nativeElement.value = '';
    }
  }

}
