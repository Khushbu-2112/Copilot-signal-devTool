import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsDebuggerComponent } from './signals-debugger.component';

describe('SignalsDebuggerComponent', () => {
  let component: SignalsDebuggerComponent;
  let fixture: ComponentFixture<SignalsDebuggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsDebuggerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalsDebuggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
