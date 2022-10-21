import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Page1Component } from './page/page1/page1.component';
import { Page2Component } from './page/page2/page2.component';
import { EnteteComponent } from './components/entete/entete.component';
import { RechercheComponent } from './components/recherche/recherche.component';
import { HeroComponent } from './components/hero/hero.component';
import { PiedPageComponent } from './components/pied-page/pied-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    EnteteComponent,
    RechercheComponent,
    HeroComponent,
    PiedPageComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
