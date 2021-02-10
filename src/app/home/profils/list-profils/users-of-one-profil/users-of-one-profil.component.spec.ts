import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersOfOneProfilComponent } from './users-of-one-profil.component';

describe('UsersOfOneProfilComponent', () => {
  let component: UsersOfOneProfilComponent;
  let fixture: ComponentFixture<UsersOfOneProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersOfOneProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersOfOneProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
