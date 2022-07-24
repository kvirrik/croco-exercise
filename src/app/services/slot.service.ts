import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINT } from '../constants';
import { Observable } from 'rxjs';
import { GameCategory, Provider } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class SlotService {
  constructor(private http: HttpClient) {}

  //
  getCategories(): Observable<GameCategory[]> {
    return this.http.get(
      `${API_ENDPOINT}/v2/slot/categories?include=games&platform=desktop`
    ) as Observable<GameCategory[]>;
  }

  //
  getSlotsByProvider(provider: string): Observable<any> {
    return this.http.get(
      `${API_ENDPOINT}/v2/slot/providers/${provider}?platform=desktop`
    );
  }

  //
  getProviders(): Observable<Provider[]> {
    return this.http.get(
      `${API_ENDPOINT}?type=slot&platform=desktop`
    ) as Observable<Provider[]>;
  }
}
