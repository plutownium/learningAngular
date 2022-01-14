import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerComponent } from './viewer.component';

describe('ViewComponent', () => {
  let component: ViewerComponent;
  let fixture: ComponentFixture<ViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(ViewerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Test code');
  });

  it("should correctly @Output input text in the component", () => {
    spyOn(component.changeTitleEvent, "emit"); // 1
    const button = fixture.nativeElement.querySelector('button');
    fixture.nativeElement.querySelector('input').value = 'A new title'; // 2
    const inputText = fixture.nativeElement.querySelector('input').value;
    
    button.click(); // 3
    fixture.detectChanges();
  
    expect(component.changeTitleEvent.emit).toHaveBeenCalledWith(inputText); // 4
  })
});
