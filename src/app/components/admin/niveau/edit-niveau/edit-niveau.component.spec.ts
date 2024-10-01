import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNiveauComponent } from './edit-niveau.component';

describe('EditNiveauComponent', () => {
  let component: EditNiveauComponent;
  let fixture: ComponentFixture<EditNiveauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditNiveauComponent]
    });
    fixture = TestBed.createComponent(EditNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
