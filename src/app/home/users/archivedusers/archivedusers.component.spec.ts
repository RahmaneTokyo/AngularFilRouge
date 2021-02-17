import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedusersComponent } from './archivedusers.component';

describe('ArchivedusersComponent', () => {
  let component: ArchivedusersComponent;
  let fixture: ComponentFixture<ArchivedusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivedusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
