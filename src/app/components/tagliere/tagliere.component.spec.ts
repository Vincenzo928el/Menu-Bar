import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagliereComponent } from './tagliere.component';

describe('TagliereComponent', () => {
  let component: TagliereComponent;
  let fixture: ComponentFixture<TagliereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagliereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
