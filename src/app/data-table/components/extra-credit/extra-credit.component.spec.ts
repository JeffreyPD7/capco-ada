import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraCreditComponent } from './extra-credit.component';

describe('ExtraCreditComponent', () => {
  let component: ExtraCreditComponent;
  let fixture: ComponentFixture<ExtraCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
