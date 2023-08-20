import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PricesComponent } from './components/prices/prices.component';
import { RulesComponent } from './components/rules/rules.component';
import { PricesDetailsComponent } from './components/prices-details/prices-details.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path:'prices', component: PricesComponent,
  },
  {
    path:'rules', component: RulesComponent
  },

  {
    path:'prices/:symbol', component: PricesDetailsComponent,

  },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
