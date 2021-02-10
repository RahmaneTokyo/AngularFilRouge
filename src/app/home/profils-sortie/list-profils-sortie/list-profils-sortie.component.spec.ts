import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProfilsSortieComponent } from './list-profils-sortie.component';

describe('ListProfilsSortieComponent', () => {
  let component: ListProfilsSortieComponent;
  let fixture: ComponentFixture<ListProfilsSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProfilsSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProfilsSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
