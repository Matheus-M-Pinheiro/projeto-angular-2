import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplosMaterialComponent } from './exemplos-material.component';

describe('ExemplosMaterialComponent', () => {
  let component: ExemplosMaterialComponent;
  let fixture: ComponentFixture<ExemplosMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExemplosMaterialComponent]
    });
    fixture = TestBed.createComponent(ExemplosMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
