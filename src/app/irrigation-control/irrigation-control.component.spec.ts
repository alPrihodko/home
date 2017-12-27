import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationControlComponent } from './irrigation-control.component';

describe('IrrigationControlComponent', () => {
  let component: IrrigationControlComponent;
  let fixture: ComponentFixture<IrrigationControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrrigationControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrrigationControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
