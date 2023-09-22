import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingMailComponent } from './booking-mail.component';

describe('BookingMailComponent', () => {
  let component: BookingMailComponent;
  let fixture: ComponentFixture<BookingMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingMailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
