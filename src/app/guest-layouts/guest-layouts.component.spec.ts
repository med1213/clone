import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestLayoutsComponent } from './guest-layouts.component';

describe('GuestLayoutsComponent', () => {
  let component: GuestLayoutsComponent;
  let fixture: ComponentFixture<GuestLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestLayoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
