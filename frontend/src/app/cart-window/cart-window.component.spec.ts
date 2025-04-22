import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartWindowComponent } from './cart-window.component';

describe('CartWindowComponent', () => {
  let component: CartWindowComponent;
  let fixture: ComponentFixture<CartWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
