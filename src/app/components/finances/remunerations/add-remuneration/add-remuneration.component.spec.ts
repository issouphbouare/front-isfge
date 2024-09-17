import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemunerationComponent } from './add-remuneration.component';

describe('AddRemunerationComponent', () => {
  let component: AddRemunerationComponent;
  let fixture: ComponentFixture<AddRemunerationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRemunerationComponent]
    });
    fixture = TestBed.createComponent(AddRemunerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
