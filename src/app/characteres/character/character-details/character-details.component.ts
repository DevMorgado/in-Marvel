import { Component, OnInit, Input } from '@angular/core';
import { CharacteresComponent } from '../../characteres.component';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  @Input() character: any;
  constructor(private characteresComponent: CharacteresComponent) { }

  ngOnInit(): void { 
  }

  showCharacterSeries(){
    this.characteresComponent.getCharacterSeries(this.character.id);
  }

}
