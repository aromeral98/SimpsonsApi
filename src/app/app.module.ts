import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgPrimeModule } from './ng-prime/ng-prime.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RandomComponent } from './pages/random/random.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgPrimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
