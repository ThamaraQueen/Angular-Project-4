import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinusButtonComponent } from './minus-button.component';

describe('MinusButtonComponent', () => {
  let component: MinusButtonComponent;
  let fixture: ComponentFixture<MinusButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinusButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinusButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
