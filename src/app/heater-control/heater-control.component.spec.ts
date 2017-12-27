import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaterControlComponent } from './heater-control.component';

describe('HeaterControlComponent', () => {
  let component: HeaterControlComponent;
  let fixture: ComponentFixture<HeaterControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaterControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaterControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
