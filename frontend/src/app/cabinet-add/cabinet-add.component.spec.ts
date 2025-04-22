import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetAddComponent } from './cabinet-add.component';

describe('CabinetAddComponent', () => {
  let component: CabinetAddComponent;
  let fixture: ComponentFixture<CabinetAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabinetAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
