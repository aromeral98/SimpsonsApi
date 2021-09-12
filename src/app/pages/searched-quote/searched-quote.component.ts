import { Component, Input, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/services/quotes.service';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-searched-quote',
  templateUrl: './searched-quote.component.html',
  styleUrls: ['./searched-quote.component.scss']
})
export class SearchedQuoteComponent implements OnInit {
  @Input() character:Character[]=[]
  quantity:number=2;
  constructor(private quoteService:QuotesService) { }
  
  
  
  ngOnInit(): void {
  
    this.quoteService.getQuotes(this.quantity)
    .subscribe(resp=>{this.character =resp;
    })
  }

}
