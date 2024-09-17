import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnneeComponent } from './add-annee.component';

describe('AddAnneeComponent', () => {
  let component: AddAnneeComponent;
  let fixture: ComponentFixture<AddAnneeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAnneeComponent]
    });
    fixture = TestBed.createComponent(AddAnneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
