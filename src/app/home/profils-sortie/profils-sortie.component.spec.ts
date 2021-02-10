import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilsSortieComponent } from './profils-sortie.component';

describe('ProfilsSortieComponent', () => {
  let component: ProfilsSortieComponent;
  let fixture: ComponentFixture<ProfilsSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilsSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilsSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
