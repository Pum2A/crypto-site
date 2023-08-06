import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './services/api-service.service';

@Component({
  selector: 'app-root',
  template: `
    <h2>Kursy kryptowalut</h2>
    <ul>
      <li *ngFor="let currency of currencies">
        {{ currency.name }}: {{ currency.rate }}
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currencies: any[] = [];

  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {
    this.getCoinData();
  }
  getCoinData() {
    this.apiService.getData().subscribe(
      data => {
        console.log('Response Data:', data); // Wypisz dane z API w konsoli

        if (data && data.rates) {
          this.currencies = Object.keys(data.rates).map(currency => ({
            name: currency,
            rate: data.rates[currency]
          }));
        }
      },
      error => {
        console.error('Wystąpił błąd podczas pobierania danych:', error);
      }
    );
  }



}
