import { TestBed } from '@angular/core/testing';

import { Math } from './math';

describe('Math', () => {
  let service: Math;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Math);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add 2 numbers', ()=>{
    expect(service.add(2,3)).toBe(5);
  });
  it('should subtract 2 numbers', ()=>{
    expect(service.sub(12,3)).toBe(9);
  });
  it('should multiply 2 numbers', ()=>{
    expect(service.mul(2,3)).toBe(6);
  });
  it('should divide 2 numbers', ()=>{
    expect(service.div(12,3)).toBe(4);
  });
});
