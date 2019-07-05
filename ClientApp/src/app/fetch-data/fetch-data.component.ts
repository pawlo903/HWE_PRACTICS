import { Component, Inject,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent implements OnInit {
  apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Szczecin,pl&appid=566c452675edab55f8961aa17ed935da&units=metric';
 
  forecasts$: WeatherForecast[];
  sortedData: WeatherForecast[];

  constructor(private _http: HttpClient ) { }

  ngOnInit() {
    return this.getWeather()
      .subscribe(data => this.forecasts$=this.extractData(data));
  }

  getWeather() {
    return this._http.get<WeatherForecast[]>(this.apiUrl);
  }
  extractData(res: any) {
    let body = res;
    return body.list || {};
  }

  celsiusToFahrenheit(temp: number) {
    return Math.round(((temp * 9 / 5) + 32) * 100) / 100;
  }



  sortData(sort: Sort) {
    const data = this.forecasts$.slice();
    if (!sort.active || sort.direction === '') {
      this.forecasts$ = data;
      return;
    }

    this.forecasts$ = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Date': return compare(a.dt_txt, b.dt_txt, isAsc);
        case 'TempC': return compare(a.main.temp, b.main.temp, isAsc);
        case 'TempF': return compare(a.main.temp, b.main.temp, isAsc);
        case 'Summary': return compare(a.weather[0].description, b.weather[0].description, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
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
