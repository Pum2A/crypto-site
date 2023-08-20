import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';


interface CryptoData {
  symbol: string;
  price: string;
}


@Component({
  selector: 'app-prices-details',
  template: `
  <div class="background">
    <div class="price-details-container">
      <p>KRYPTOWALUTA : <span class="orange">

        {{ priceDetails.symbol }}
      </span>
      </p>
      <p>AKTUALNA CENA : <span class="orange">

        {{ priceDetails.price }}
      </span>
<span class="green">

  $
</span>
    </p>
    <button routerLink="/prices">POWRÓT</button>
    </div>
  </div>
  `,
  styleUrls: ['./prices-details.component.scss']
})
export class PricesDetailsComponent implements OnInit {

  priceDetails: CryptoData = { price: '', symbol: '' }; // Inicjalizacja pustymi danymi



  constructor(private apiService:ApiServiceService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCrypto();
  }

  loadCrypto(): void {
    const id = this.route.snapshot.params['symbol'];
    this.apiService.getDataSingleCrypto(id).pipe(
      map((contactServer: Object) => contactServer as CryptoData)
    ).subscribe((cryptoData: CryptoData) => {
      this.priceDetails = cryptoData;
    });
  }

}
