import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateWellnessComponent } from './corporate-wellness.component';

describe('CorporateWellnessComponent', () => {
  let component: CorporateWellnessComponent;
  let fixture: ComponentFixture<CorporateWellnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateWellnessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateWellnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
