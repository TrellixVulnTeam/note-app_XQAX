import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptPracticeComponent } from './javascript-practice.component';

describe('JavascriptPracticeComponent', () => {
  let component: JavascriptPracticeComponent;
  let fixture: ComponentFixture<JavascriptPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptPracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
