import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AperitiviComponent } from './components/aperitivi/aperitivi.component';
import { CocktailComponent } from './components/cocktail/cocktail.component';
import { TagliereComponent } from './components/tagliere/tagliere.component';
import { PaniniComponent } from './components/panini/panini.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'aperitivi', component: AperitiviComponent },
  { path: "cocktail", component: CocktailComponent },
  { path: "tagliere", component: TagliereComponent },
  { path: "panini", component: PaniniComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
