import { TestBed, inject } from '@angular/core/testing';

import { FetchDataComponent } from './fetch-data.component';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';

describe('FetchDataComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchDataComponent, HttpClient, HttpHandler]
    });

  });

  it('should be created', inject([FetchDataComponent], (service: FetchDataComponent) => {
    expect(service).toBeTruthy();
  }));

  it('should have celsiusToFahrenheit function', inject([FetchDataComponent], (service: FetchDataComponent) => {
    expect(service.celsiusToFahrenheit).toBeTruthy();
  }));

  it('should calculateFahrenheit correctly', inject([FetchDataComponent], (service: FetchDataComponent) => {
    expect(service.celsiusToFahrenheit(1)).toEqual(33.8);
  }));

});
