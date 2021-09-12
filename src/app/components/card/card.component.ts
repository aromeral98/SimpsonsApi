import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent {

  @Input() character:Character[]=[]
  @Input()  quantity!:number;

  constructor(private quotes:QuotesService) { }
  generateQuote(quantity:number ){
    this.quotes.getQuotes(quantity)
    .subscribe(resp=>
      {
        this.character=resp;
       
      })



    }}
