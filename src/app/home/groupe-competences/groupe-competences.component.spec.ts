import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeCompetencesComponent } from './groupe-competences.component';

describe('GroupeCompetencesComponent', () => {
  let component: GroupeCompetencesComponent;
  let fixture: ComponentFixture<GroupeCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupeCompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
