import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGroupeCompetencesComponent } from './edit-groupe-competences.component';

describe('EditGroupeCompetencesComponent', () => {
  let component: EditGroupeCompetencesComponent;
  let fixture: ComponentFixture<EditGroupeCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGroupeCompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGroupeCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
