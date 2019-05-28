import { TipData } from './tipdata';
import { TestBed } from '@angular/core/testing';

describe('Tipdata', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  it('should create an instance', () => {
    const tipdata: TipData = TestBed.get(TipData);
    expect(tipdata).toBeTruthy();
  });
});
