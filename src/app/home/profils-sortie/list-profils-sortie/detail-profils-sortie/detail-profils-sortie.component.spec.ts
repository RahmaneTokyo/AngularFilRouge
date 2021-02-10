import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProfilsSortieComponent } from './detail-profils-sortie.component';

describe('DetailProfilsSortieComponent', () => {
  let component: DetailProfilsSortieComponent;
  let fixture: ComponentFixture<DetailProfilsSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProfilsSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProfilsSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
