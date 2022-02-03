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
  showAllCharacters: boolean = true;
  showCharacterDetails: boolean = false;
  showCharacterSeries: boolean = false;
  searchedCharacter:any=[];
  characterDetails:any=[];
  characterSeries:any=[];
  characterName!: string;

  ngOnInit(): void {
    this.showSearchResult = false;
    this.showCharacterSeries = false;
    this.showAllCharacters = true;
    this.getCharacters();
    
  }

  getCharacters(){
    this.allCharacters = this.characterService.getAllCharacteres();
  }

  findCharacter(event:any){
     this.characterName = event.target.value;
     if(this.characterName.length == 0){
       this.ngOnInit()
     }else{
      this.characterService.getCharacterByName(this.characterName).subscribe((result)=>{
        if(result.data.count>0){
          this.showSearchResult = true;
          this.showAllCharacters = false;
          this.showCharacterSeries = false;
          this.searchedCharacter = result.data.results;
        }else{
          this.ngOnInit();
        }
      })
     }
  }

  getCharacterDetails(characterId:number){
    this.characterService.getCharacterById(characterId).subscribe((result)=>{
      if(result.data.count>0){
        this.showSearchResult = false;
        this.showAllCharacters = false
        this.showCharacterDetails = true;
        this.characterDetails = result.data.results;
      }else{
        this.ngOnInit();
      }
    })
  }

  getCharacterSeries(characterId:number){
    this.characterService.getSeriesByCharacter(characterId).subscribe((result)=>{
      if(result.data.count>0){
        this.showSearchResult = false;
        this.showAllCharacters = false
        this.showCharacterDetails = false;
        this.showCharacterSeries = true; 
        this.characterSeries = result.data.results;
      }else{
        this.ngOnInit();
      }
    })
  }

}