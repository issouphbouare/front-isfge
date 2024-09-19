import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSeanceComponent } from './edit-seance.component';

describe('EditSeanceComponent', () => {
  let component: EditSeanceComponent;
  let fixture: ComponentFixture<EditSeanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSeanceComponent]
    });
    fixture = TestBed.createComponent(EditSeanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
