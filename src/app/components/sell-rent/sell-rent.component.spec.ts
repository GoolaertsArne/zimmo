import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellRentComponent } from './sell-rent.component';

describe('SellRentComponent', () => {
  let component: SellRentComponent;
  let fixture: ComponentFixture<SellRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellRentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
