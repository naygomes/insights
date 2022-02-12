import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './layout/home/home.component';
import { CreateCardComponent } from './layout/create-card/create-card.component';
import { InsightCardComponent } from './components/insight-card/insight-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateCardComponent,
    InsightCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
