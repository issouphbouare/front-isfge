import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnneesComponent } from './annees.component';

describe('AnneesComponent', () => {
  let component: AnneesComponent;
  let fixture: ComponentFixture<AnneesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnneesComponent]
    });
    fixture = TestBed.createComponent(AnneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
