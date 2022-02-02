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
  showSearchResult: boolean = false;
  searchedCharacter:any=[];
  characterName!: string;

  ngOnInit(): void {
    this.showSearchResult = false;
    this.getCharacters();
    
  }

  getCharacters(){
    this.allCharacters = this.characterService.getAllCharacteres();
  }

  findCharacter(event:any)
  {
     this.characterName = event.target.value;
     if(this.characterName.length == 0){
       this.ngOnInit()
     }else{
      this.characterService.getCharacterByName(this.characterName).subscribe((result)=>{
        if(result.data.count>0){
          this.showSearchResult = true;
          this.searchedCharacter = result.data.results;
        }else{
          this.ngOnInit();
        }
      })
     }
  }

}