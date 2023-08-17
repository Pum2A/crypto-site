import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-prices',
  template: `
    <div class="prices-main-background-container">
      <div class="content-container">


        <div class="h3-container">
          <h3>CENY KRYPTOWALUT NA DZIEN {{today}} W PRZELICZENIU NA $ </h3>
        </div>
        <div class="search-container">
        <input type="text" placeholder="Wyszukaj kryptowalutę" [(ngModel)]="searchText" (input)="getDataLive()">
</div>
<ul>
<li *ngFor="let crypto of cryptos | search: searchText">
  <span>

    {{ crypto.symbol }}
    </span>
  <div class="green">

    : {{ crypto.lastPrice }} $
  </div>
  </li>

</ul>


      </div>
    </div>
  `,

  styleUrls: ['./prices.component.scss'],
})
export class PricesComponent {
  searchText: any;
  today: any;
  cryptos: any;




  constructor(
    private apiService: ApiServiceService,
    private activeRoute: ActivatedRoute,
    private datePipe: DatePipe,

  ) {
    this.today = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  ngOnInit() {
  }











   getDataLive(): void {
    if(this.searchText.trim() !== ''){

      this.apiService.getDataLive().subscribe((response) => {
        this.cryptos = response;
      });
    } else {
      this.cryptos = [];
    }
  }




}
