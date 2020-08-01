import { Component, OnInit } from '@angular/core';
import { Weather1Service } from '../../shared/service/weather-1/weather-1.service';

@Component({
  templateUrl: './weather-widget-card.component.html',
  styleUrls: ['./weather-widget-card.component.scss'],
})
export class WeatherWidgetCardComponent implements OnInit {
  weather;
  isTemperatureInCelsius = true;
  temp;

  constructor(private _ws: Weather1Service) {}

  ngOnInit(): void {
    this._ws.getWeather('', 'metric').subscribe((res) => {
      this.temp = res.cod;
    });
  }

  changeUnit(event): void {
    const unit = !event ? 'metric' : 'imperial';
    this._ws.getWeather('', unit).subscribe((res) => {
      this.temp = res.cod;
    });
  }
}
