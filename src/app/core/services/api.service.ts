import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class ApiService {
  private baseUrl = environment.apiUrl
  private apiKei = environment.apiKey

  constructor(private http: HttpClient) {
  }

  get<T>(endpoint: string, action: any = {}) {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}?APIKey=${this.apiKei}&action=${action}`);
  }
}
