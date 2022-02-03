import { Component, OnInit, Input } from '@angular/core';
import { CharacteresComponent } from '../characteres.component';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() character: any;
  constructor(private characteresComponent: CharacteresComponent) { }
  
  ngOnInit(): void {
  }
    
  showCharacterDetails(){
    this.characteresComponent.getCharacterDetails(this.character.id);
  }

}
