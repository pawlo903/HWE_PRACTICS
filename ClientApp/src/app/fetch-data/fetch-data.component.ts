import { Component, Inject,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
  apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Szczecin,pl&appid=566c452675edab55f8961aa17ed935da&units=metric';
 
  forecasts$: WeatherForecast;

  constructor(private _http: HttpClient ) { }

  ngOnInit() {
    return this.getWeather()
      .subscribe(data => this.forecasts$=this.extractData(data));
  }

  getWeather() {
    return this._http.get<WeatherForecast>(this.apiUrl);
  }
  extractData(res: any) {
    let body = res;
    return body.list || {};
  }

  celsiusToFahrenheit(temp: number) {
    return Math.round(((temp * 9 / 5) + 32) * 100) / 100;
  }
}


export class WeatherForecast {
  main: {
    temp: number;
  }
  weather: {
    description: string;
  }
  dt_txt: string;
}
