import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { WeatherWidgetCardComponent } from './weather-widget-card/weather-widget-card.component';

import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [WeatherWidgetCardComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  entryComponents: [WeatherWidgetCardComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const weather = createCustomElement(WeatherWidgetCardComponent, {
      injector: this.injector,
    });
    customElements.define('gs-weather', weather);
  }

  ngDoBootstrap() {}
}
