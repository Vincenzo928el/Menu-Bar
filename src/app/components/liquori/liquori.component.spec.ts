import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquoriComponent } from './liquori.component';

describe('LiquoriComponent', () => {
  let component: LiquoriComponent;
  let fixture: ComponentFixture<LiquoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
