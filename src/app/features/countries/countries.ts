import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-countries',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './countries.html',
  styleUrl: './countries.scss',
  standalone: true
})
export class Countries implements OnInit, OnDestroy {
  alive = true;
  countries: any[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.apiService.get('countries', {t:'list'}).subscribe({
      next: (res: any) => {
        this.countries = res?.data;
      }
    })
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
