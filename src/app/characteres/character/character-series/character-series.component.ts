import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-series',
  templateUrl: './character-series.component.html',
  styleUrls: ['./character-series.component.css']
})
export class CharacterSeriesComponent implements OnInit {
  @Input() character: any;
  constructor() { }

  ngOnInit(): void {
    console.log('characterSeries');
  }

}
