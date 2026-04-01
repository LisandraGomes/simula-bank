import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBank } from './home-bank';

describe('HomeBank', () => {
  let component: HomeBank;
  let fixture: ComponentFixture<HomeBank>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBank],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeBank);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
