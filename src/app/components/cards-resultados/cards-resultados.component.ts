import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-resultados',
  templateUrl: './cards-resultados.component.html',
  styleUrls: ['./cards-resultados.component.css']
})
export class CardsResultadosComponent implements OnInit {

  @Input() sunrise!: string;
  @Input() sunset!: string;


  constructor() { }

  ngOnInit(): void {
  }

}
