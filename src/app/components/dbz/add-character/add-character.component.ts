import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { DbzService } from 'src/app/services/dbz.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  newCharacter:Character = {
    name:'',
    power:0
  }

  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
  }

  addCharacter(): void {
    this.dbzService.addCharacter(this.newCharacter);
    this.newCharacter = {
      name:'',
      power:0
    };
  }
}
