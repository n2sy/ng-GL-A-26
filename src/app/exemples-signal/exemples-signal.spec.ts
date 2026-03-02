import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplesSignal } from './exemples-signal';

describe('ExemplesSignal', () => {
  let component: ExemplesSignal;
  let fixture: ComponentFixture<ExemplesSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemplesSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemplesSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
