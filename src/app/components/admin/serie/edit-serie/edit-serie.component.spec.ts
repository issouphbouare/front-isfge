import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSerieComponent } from './edit-serie.component';

describe('EditSerieComponent', () => {
  let component: EditSerieComponent;
  let fixture: ComponentFixture<EditSerieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSerieComponent]
    });
    fixture = TestBed.createComponent(EditSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
