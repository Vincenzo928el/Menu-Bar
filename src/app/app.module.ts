import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TagliereComponent } from './components/tagliere/tagliere.component';
import { CocktailComponent } from './components/cocktail/cocktail.component';
import { LiquoriComponent } from './components/liquori/liquori.component';
import { AperitiviComponent } from './components/aperitivi/aperitivi.component';
import { PaniniComponent } from './components/panini/panini.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    TagliereComponent,
    CocktailComponent,
    LiquoriComponent,
    AperitiviComponent,
    PaniniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
