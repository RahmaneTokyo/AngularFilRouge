import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCompetenceComponent } from './detail-competence.component';

describe('DetailCompetenceComponent', () => {
  let component: DetailCompetenceComponent;
  let fixture: ComponentFixture<DetailCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
