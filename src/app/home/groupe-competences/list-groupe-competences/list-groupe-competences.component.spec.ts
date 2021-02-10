import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupeCompetencesComponent } from './list-groupe-competences.component';

describe('ListGroupeCompetencesComponent', () => {
  let component: ListGroupeCompetencesComponent;
  let fixture: ComponentFixture<ListGroupeCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGroupeCompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGroupeCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
