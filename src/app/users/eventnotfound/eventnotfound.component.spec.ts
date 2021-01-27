import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventnotfoundComponent } from './eventnotfound.component';

describe('EventnotfoundComponent', () => {
  let component: EventnotfoundComponent;
  let fixture: ComponentFixture<EventnotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventnotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventnotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
