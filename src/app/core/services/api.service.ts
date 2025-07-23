import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class ApiService {
  private baseUrl = environment.apiUrl
  private apiKey = environment.apiKey

  constructor(private http: HttpClient) {
  }


  get<T>(endpoint: string, params?: { [key: string]: any }) {
    // نبدأ بإضافة user و token كـ params أساسيين
    let httpParams = new HttpParams()
      .set('user', 'ahmedezz710907')
      .set('token', this.apiKey);

    // نضيف الباقي لو فيه params إضافية
    if (params) {
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }

    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, { params: httpParams });
  }
}
