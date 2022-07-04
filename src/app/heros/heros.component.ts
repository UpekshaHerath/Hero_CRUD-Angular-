import { Component, OnInit } from '@angular/core';
import { Hero } from './../hero';
import { HEROS } from './../mock-hros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  heros = HEROS;
  hero1: Hero = {
    id: 1,
    name: "Windstorm"
  };

  constructor() { }

  ngOnInit(): void {
    
  }

}
