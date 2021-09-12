import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { QuotesService } from '../services/quotes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {


  constructor(private quotes:QuotesService) { }

  character:Character[]=[]
  quantity:number=1;
  generateQuote(quantity:number ){
    this.quotes.getQuotes(quantity)
    .subscribe(resp=>
      {
        this.character=resp;
        console.log(this.character)
      })
  }
  ngOnInit(): void {
    console.log(this.quantity)
    this.generateQuote(this.quantity)
    
  }

  }


