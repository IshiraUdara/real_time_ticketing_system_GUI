import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialInputsComponent } from './initial-inputs.component';

describe('InitialInputsComponent', () => {
  let component: InitialInputsComponent;
  let fixture: ComponentFixture<InitialInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialInputsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
