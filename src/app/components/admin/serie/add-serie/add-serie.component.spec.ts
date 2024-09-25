import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSerieComponent } from './add-serie.component';

describe('AddSerieComponent', () => {
  let component: AddSerieComponent;
  let fixture: ComponentFixture<AddSerieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSerieComponent]
    });
    fixture = TestBed.createComponent(AddSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
