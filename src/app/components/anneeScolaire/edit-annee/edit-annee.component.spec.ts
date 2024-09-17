import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnneeComponent } from './edit-annee.component';

describe('EditAnneeComponent', () => {
  let component: EditAnneeComponent;
  let fixture: ComponentFixture<EditAnneeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAnneeComponent]
    });
    fixture = TestBed.createComponent(EditAnneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
