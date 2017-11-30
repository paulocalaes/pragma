import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { BeerComponent } from './beer/beer.component';

import { TemperatureService } from './temperature.service';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    BeerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TemperatureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
