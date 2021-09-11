import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../pages/interfaces/character.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http:HttpClient) { }

  getQuotes(quantity:number):Observable<Character[]>{
    return this.http.get<Character[]>(environment.baseUrl+'?count='+quantity)
}

}