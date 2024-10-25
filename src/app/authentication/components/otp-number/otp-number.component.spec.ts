import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpNumberComponent } from './otp-number.component';

describe('OtpNumberComponent', () => {
  let component: OtpNumberComponent;
  let fixture: ComponentFixture<OtpNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtpNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
