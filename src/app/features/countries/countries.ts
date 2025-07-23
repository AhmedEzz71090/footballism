import {Component, effect, inject, OnDestroy, OnInit, signal} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {takeWhile} from 'rxjs';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-countries',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './countries.html',
  styleUrl: './countries.scss',
  standalone: true
})
export class Countries implements OnInit, OnDestroy {
  private apiService = inject(ApiService);
  alive = true;
  countries = signal<any[]>([]);

  // constructor(private apiService: ApiService) {
  // }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    const countries$ = this.apiService.get('', 'get_countries');
    const countriesSignal = toSignal(countries$);

    effect(() => {
      this.countries.set(countriesSignal());
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
