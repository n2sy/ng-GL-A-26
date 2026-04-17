import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServers } from './list-servers';

describe('ListServers', () => {
  let component: ListServers;
  let fixture: ComponentFixture<ListServers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListServers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListServers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
