import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMaterialComponent } from './modal-material.component';

describe('ModalMaterialComponent', () => {
  let component: ModalMaterialComponent;
  let fixture: ComponentFixture<ModalMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalMaterialComponent]
    });
    fixture = TestBed.createComponent(ModalMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
