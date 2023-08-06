import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
@Component({
  selector: 'app-home',
 template: `
     <h2>Kursy kryptowalut</h2>
    <ul>
      <li *ngFor="let crypto of cryptoData.slice(0, limit)">
        Symbol: {{ crypto.symbol }} <br>
        Name: {{ crypto.name }} <br>
        Full Name: {{ crypto.name_full }} <br>
        Max Supply: {{ crypto.max_supply }} <br>
        <img [src]="crypto.icon_url" alt="Icon">
      </li>
    </ul>

    <!-- <h2>Kursy walut fiat</h2>
    <ul>
      <li *ngFor="let fiat of fiatData">
        Symbol: {{ fiat[0] }} <br>
        Name: {{ fiat[1] }}
      </li>
    </ul> -->
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
currencies: any[] = [];
  cryptoData: any[] = [];
  fiatData: any[] = [];
  limit = 10;
  constructor(private apiService: ApiServiceService) {}


ngOnInit() {
    this.getData();
  }
  getData() {
    this.apiService.getData().subscribe(
      data => {
        console.log('Response Data:', data);

        if (data && data.crypto) {
          this.cryptoData = Object.values(data.crypto);
        }

        if (data && data.fiat) {
          this.fiatData = Object.entries(data.fiat);
        }
      },
      error => {
        console.error('Wystąpił błąd podczas pobierania danych:', error);
      }
    );
  }

}
