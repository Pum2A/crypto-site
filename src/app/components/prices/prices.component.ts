import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-prices',
  template: `

<div class="prices-main-background-container">
  <div class="content-container">
    <div class="input-container">
      <input type="text">
    </div>
    <ul>
      <li *ngFor="let rate of cryptoData | keyvalue">
        {{ rate.key }}: {{ rate.value }}
      </li>
    </ul>
  </div>
</div>





  `

  ,
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent {
  cryptoData: any = {};
  fiatData: any[] = [];
  limit = 70;
Object: any;

  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {
    this.getDataLive();
  }

  getDataLive() {
    this.apiService.getDataLive().subscribe(
      data => {
        console.log('Response Data:', data);

        if (data && data.rates) {
          this.cryptoData = data.rates;
          console.log('Crypto Data:', this.cryptoData);
        }
      },
      error => {
        console.error('Wystąpił błąd podczas pobierania danych:', error);
      }
    );
  }


}


