import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRemunerationComponent } from './edit-remuneration.component';

describe('EditRemunerationComponent', () => {
  let component: EditRemunerationComponent;
  let fixture: ComponentFixture<EditRemunerationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRemunerationComponent]
    });
    fixture = TestBed.createComponent(EditRemunerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
