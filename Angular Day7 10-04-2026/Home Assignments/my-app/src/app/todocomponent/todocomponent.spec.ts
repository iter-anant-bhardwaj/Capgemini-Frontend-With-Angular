import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todocomponent } from './todocomponent';

describe('Todocomponent', () => {
  let component: Todocomponent;
  let fixture: ComponentFixture<Todocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Todocomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Todocomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
