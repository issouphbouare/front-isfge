import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEleveComponent } from './add-eleve.component';

describe('AddEleveComponent', () => {
  let component: AddEleveComponent;
  let fixture: ComponentFixture<AddEleveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEleveComponent]
    });
    fixture = TestBed.createComponent(AddEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
