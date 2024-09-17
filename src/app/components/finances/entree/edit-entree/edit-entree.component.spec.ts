import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEntreeComponent } from './edit-entree.component';

describe('EditEntreeComponent', () => {
  let component: EditEntreeComponent;
  let fixture: ComponentFixture<EditEntreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEntreeComponent]
    });
    fixture = TestBed.createComponent(EditEntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
