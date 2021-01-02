import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredNotesComponent } from './filtered-notes.component';

describe('FilteredNotesComponent', () => {
  let component: FilteredNotesComponent;
  let fixture: ComponentFixture<FilteredNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
