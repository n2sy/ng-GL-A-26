import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoServer } from './info-server';

describe('InfoServer', () => {
  let component: InfoServer;
  let fixture: ComponentFixture<InfoServer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoServer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoServer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
