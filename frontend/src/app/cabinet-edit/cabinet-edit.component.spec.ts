import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetEditComponent } from './cabinet-edit.component';

describe('CabinetEditComponent', () => {
  let component: CabinetEditComponent;
  let fixture: ComponentFixture<CabinetEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabinetEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
