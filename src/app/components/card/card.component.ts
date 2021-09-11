import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/pages/interfaces/character.interface';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  constructor(private quotes:QuotesService) { }

  character:Character[]=[]
  quantity:number=1;
  generateQuote(quantity:number ){
    this.quotes.getQuotes(quantity)
    .subscribe(resp=>{this.character=resp;})
  }
  ngOnInit(): void {
    this.generateQuote(this.quantity)
    
  }

}
