import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RememberPassword } from './remember-password';

describe('RememberPassword', () => {
  let component: RememberPassword;
  let fixture: ComponentFixture<RememberPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RememberPassword],
    }).compileComponents();

    fixture = TestBed.createComponent(RememberPassword);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
