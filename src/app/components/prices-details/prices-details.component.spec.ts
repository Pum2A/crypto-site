import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesDetailsComponent } from './prices-details.component';

describe('PricesDetailsComponent', () => {
  let component: PricesDetailsComponent;
  let fixture: ComponentFixture<PricesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
