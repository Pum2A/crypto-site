import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { PricesComponent } from './components/prices/prices.component';
import { RulesComponent } from './components/rules/rules.component';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SearchComponent } from './components/search/search.component';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ImageSliderComponent,
    PricesComponent,
    RulesComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgImageSliderModule,
    ReactiveFormsModule,
    FormsModule,


    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
