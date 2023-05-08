import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciosUd33ComponentsComponent } from './ejercicios-ud33-components.component';

describe('EjerciciosUd33ComponentsComponent', () => {
  let component: EjerciciosUd33ComponentsComponent;
  let fixture: ComponentFixture<EjerciciosUd33ComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjerciciosUd33ComponentsComponent]
    });
    fixture = TestBed.createComponent(EjerciciosUd33ComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
