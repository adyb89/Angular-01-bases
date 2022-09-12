import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';

@Injectable()
export class DbzService {

    private _characters: Character[] = [
        {
          name: 'Goku',
          power: 15000
        },
    
        {
          name: 'Vegeta',
          power: 7500
        }
      ]
    
    constructor() {}

    addCharacter(character: Character): void {
        if (!character.name) { return; }
        this._characters.push(character);
    }

    get characters(): Character[] {
        return [...this._characters];
    }
}