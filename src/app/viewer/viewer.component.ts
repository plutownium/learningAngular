import { Component, OnInit,ViewChild,ElementRef, Input,Output,EventEmitter,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ViewerComponent implements OnInit {
  @Input() message: string;
  @Input() number: number;

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
