import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingContact } from './floating-contact';

describe('FloatingContact', () => {
  let component: FloatingContact;
  let fixture: ComponentFixture<FloatingContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingContact],
    }).compileComponents();

    fixture = TestBed.createComponent(FloatingContact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
