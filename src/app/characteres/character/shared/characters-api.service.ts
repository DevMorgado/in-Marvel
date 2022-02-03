import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  PUBLIC_KEY = '56496b3c452a124e305da6183c1b6b6e';
  HASH = '90be452ec6f4adf8aad8ecf7a14492a2';
  TIMESTAMP ='1643653262097';
  
  constructor(private http: HttpClient) { }
  
  getAllCharacteres():Observable<any>{
    const allCharacters = 'https://gateway.marvel.com/v1/public/characters?limit=12&ts='+this.TIMESTAMP+'&apikey='+this.PUBLIC_KEY+'&hash='+this.HASH;
    return this.http.get(allCharacters).pipe(
      map((res: any) => {
        return res.data.results;
      }),
      retry(5)
    );
  }

  getCharacterByName(characterName:string):Observable<any>{
    const characterByName = 'https://gateway.marvel.com:443/v1/public/characters?limit=12&nameStartsWith='+characterName+'&ts='+this.TIMESTAMP+'&apikey='+this.PUBLIC_KEY+'&hash='+this.HASH;
    return this.http.get(characterByName);
  }

  getCharacterById(characterId:number):Observable<any>{
    const characterById = 'https://gateway.marvel.com:443/v1/public/characters/'+characterId+'?ts='+this.TIMESTAMP+'&apikey='+this.PUBLIC_KEY+'&hash='+this.HASH;
    return this.http.get(characterById);
  }

  getSeriesByCharacter(characterId:number):Observable<any>{
    const seriesByCharacter = 'https://gateway.marvel.com:443/v1/public/characters/'+characterId+'/series?ts='+this.TIMESTAMP+'&apikey='+this.PUBLIC_KEY+'&hash='+this.HASH;
    return this.http.get(seriesByCharacter);
  }
}
