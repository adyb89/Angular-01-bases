import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { DbzService } from 'src/app/services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {


  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
  }

get characters(): Character[] {
  return this.dbzService.characters
}
}
