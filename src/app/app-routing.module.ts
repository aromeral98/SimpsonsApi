import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './home/home.component';
import { SearchedQuoteComponent } from './pages/searched-quote/searched-quote.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'quote',component:SearchedQuoteComponent},
  {path:'**',redirectTo:''}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
