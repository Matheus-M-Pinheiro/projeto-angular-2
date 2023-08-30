import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionarioComponent } from './questionario.component';

describe('QuestionarioComponent', () => {
  let component: QuestionarioComponent;
  let fixture: ComponentFixture<QuestionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionarioComponent]
    });
    fixture = TestBed.createComponent(QuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
