import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentosComponent } from './lancamentos.component';

describe('LancamentosComponent', () => {
  let component: LancamentosComponent;
  let fixture: ComponentFixture<LancamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LancamentosComponent]
    });
    fixture = TestBed.createComponent(LancamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
