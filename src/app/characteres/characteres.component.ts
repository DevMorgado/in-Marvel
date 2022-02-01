import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from './character/shared/characters-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characteres',
  templateUrl: './characteres.component.html',
  styleUrls: ['./characteres.component.css']
})
export class CharacteresComponent implements OnInit {

  constructor(private characterService: CharactersApiService) { }
  allCharacters: Observable<any> | undefined;

  ngOnInit(): void {
    this.getCharacters()
  }

  getCharacters(){
    this.allCharacters = this.characterService.getAllCharacteres();
  }

}