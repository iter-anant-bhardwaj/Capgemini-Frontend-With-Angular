import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter } from './counter';
import { By } from '@angular/platform-browser';

describe('Counter', () => {
  let component: Counter;
  let fixture: ComponentFixture<Counter>;
  // let button: 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counter],
    }).compileComponents();

    fixture = TestBed.createComponent(Counter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should increase  the count when it is clicked', ()=>{
    // component.c.incrementCount()
    // expect(component.c.count).toEqual(1);

    let button= fixture.debugElement.queryAll(By.css('button'))
    button[2].triggerEventHandler('click')
    expect(component.c.count).toEqual(1);
    fixture.detectChanges();//! Telling the component to run change detection
    let h3 = fixture.debugElement.query(By.css('h3'));
    expect(h3.nativeElement.textContent).toContain('1');
  })
  it('should decrease the count when it is clicked', ()=>{
    // component.c.decrementCount()
    // expect(component.c.count).toEqual(-1);

    let button=fixture.debugElement.queryAll(By.css('button'))
    button[0].triggerEventHandler('click')
    expect(component.c.count).toEqual(-1);
    fixture.detectChanges();
    let h3 = fixture.debugElement.query(By.css('h3'));
    expect(h3.nativeElement.textContent).toEqual('-1');

  })
  it('should resett the count when it is clicked', ()=>{
    // component.c.resetCount()
    // expect(component.c.count).toEqual(0);

    let button=fixture.debugElement.queryAll(By.css('button'))
    button[1].triggerEventHandler('click')
    expect(component.c.count).toEqual(0);
    fixture.detectChanges();
    let h3 = fixture.debugElement.query(By.css('h3'));
    expect(h3.nativeElement.textContent).toEqual('0');
  })
});
