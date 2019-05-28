import { GameData } from './gamedata';
import { TestBed } from '@angular/core/testing';

describe('Gamedata', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
  it('should create an instance', () => {
    const gameservice: GameData = TestBed.get(GameData);
    expect(gameservice).toBeTruthy();
  });
});