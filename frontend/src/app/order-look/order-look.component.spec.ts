import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLookComponent } from './order-look.component';

describe('OrderLookComponent', () => {
  let component: OrderLookComponent;
  let fixture: ComponentFixture<OrderLookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderLookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
