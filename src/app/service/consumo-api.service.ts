import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService {

  private urlAPI = "https://api.sunrise-sunset.org/json";


  constructor(
    private http: HttpClient
  ) { }

  getAPI(lat: string, long: string) {
    let params = new HttpParams();
    params = params.set('lat', lat);
    params = params.set('lng', long);

    return this.http.get(this.urlAPI, {params});
  }
}
