import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemunerationsComponent } from './remunerations.component';

describe('RemunerationsComponent', () => {
  let component: RemunerationsComponent;
  let fixture: ComponentFixture<RemunerationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemunerationsComponent]
    });
    fixture = TestBed.createComponent(RemunerationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
