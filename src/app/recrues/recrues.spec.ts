import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recrues } from './recrues';

describe('Recrues', () => {
  let component: Recrues;
  let fixture: ComponentFixture<Recrues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recrues]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recrues);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
