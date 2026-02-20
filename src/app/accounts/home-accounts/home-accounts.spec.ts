import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAccounts } from './home-accounts';

describe('HomeAccounts', () => {
  let component: HomeAccounts;
  let fixture: ComponentFixture<HomeAccounts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAccounts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAccounts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
