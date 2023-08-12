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
        <input type="text" placeholder="Wyszukaj kryptowalutę" [(ngModel)]="searchTerm" (click)="isClickedPlaceholder()">
</div>
<ul>
<li *ngFor="let rate of filterCryptoData() | keyvalue; let i = index;" [ngClass]="i < 5 ? 'green-text' : 'grey-text'">
  {{ rate.key }}: {{ rate.value }} $
</li>
</ul>

        <!-- <ul>
          <li *ngFor="let rate of sortedCryptoData.splice(0, limit); let i = index;"  [ngClass]="i < 10 ? 'green-text' : 'grey-text'">


              {{ rate.key }}: {{ rate.value }} $

          </li>
        </ul> -->
      </div>
    </div>
  `,

  styleUrls: ['./prices.component.scss'],
})
export class PricesComponent {
  cryptoData: any = {};
  sortedCryptoData: any[] = [];
  fiatData: any[] = [];
  limit = 102;
  Object: any;
  searchText: any;
  today: any;
  searchTerm: string = '';
  isClicked = false;




  constructor(
    private apiService: ApiServiceService,
    private activeRoute: ActivatedRoute,
    private datePipe: DatePipe,

  ) {
    this.today = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  ngOnInit() {
    this.getDataLive();
  }


  filterCryptoData(): any {
    if (!this.searchTerm) {
      const startIndex = 0; // Indeks początkowy
      const endIndex = 0; // Indeks końcowy

      return this.sortedCryptoData.slice(startIndex, endIndex);
    }

    const filteredData: any = {};
    const searchTermLowerCase = this.searchTerm.toLowerCase();

    for (const key in this.cryptoData) {
      if (key.toLowerCase().includes(searchTermLowerCase)) {
        filteredData[key] = this.cryptoData[key];
      }
    }

    return filteredData;
  }

  isClickedPlaceholder(){
    this.isClicked = !this.isClicked
  }







  getDataLive() {
    this.apiService.getDataLive().subscribe(
      (data) => {
        console.log('Response Data:', data);

        if (data && data.rates) {
          this.cryptoData = data.rates;
          this.sortedCryptoData = this.sortCryptoData(this.cryptoData);
          console.log('Sorted Crypto Data:', this.sortedCryptoData);
        }
      },
      (error) => {
        console.error('Wystąpił błąd podczas pobierania danych:', error);
      }
    );
  }

  //  Informacje o funkcji:

  // this.apiService.getDataLive().subscribe(...
  //   Tutaj rozpoczyna się żądanie do API poprzez wywołanie metody getDataLive() z serwisu apiService. Metoda ta zwraca strumień (Observable), na którym możemy zasubskrybować, aby otrzymać dane z API w momencie, gdy są dostępne.

  //   data => {...
  //   To jest funkcja, która jest wywoływana w momencie, gdy otrzymujemy odpowiedź (dane) z API. Przekazujemy te dane do tej funkcji.

  //   console.log('Response Data:', data);
  //   Wypisujemy w konsoli odebrane dane. To pozwala nam na sprawdzenie, jakie dokładnie dane zostały zwrócone przez API.

  //   if (data && data.rates) { ...
  //   Sprawdzamy, czy data zawiera jakieś dane oraz czy istnieje pole rates w tych danych. rates to obiekt, który zawiera ceny kryptowalut.

  //   this.cryptoData = data.rates;
  //   Przypisujemy zawartość pola rates z obiektu data do zmiennej cryptoData. Teraz cryptoData zawiera obiekt z danymi cen kryptowalut.

  //   this.sortedCryptoData = this.sortCryptoData(this.cryptoData);
  //   Wywołujemy funkcję sortCryptoData(), która sortuje te dane według cen. Wynik sortowania przypisujemy do zmiennej sortedCryptoData.

  //   console.log('Sorted Crypto Data:', this.sortedCryptoData);
  //   Wypisujemy w konsoli posortowane dane kryptowalut. Możemy to zrobić, aby upewnić się, że sortowanie działa poprawnie.

  //   error => {...
  //   Ta część jest wywoływana w przypadku, gdy wystąpi błąd podczas pobierania danych z API. Błędy te mogą być spowodowane brakiem połączenia z internetem, błędnym adresem API, itp.


  // Sortowanie od najwyższej ceny do najniższej
  sortCryptoData(data: any): any[] {
    return Object.keys(data)
      .map((key) => ({ key, value: data[key] }))
      .sort((a, b) => b.value - a.value);
  }

  //  Informacje o funkcji:

  // sortCryptoData(data: any): any[] {
  // Jest to funkcja, którą stworzyłem, aby posortować dane kryptowalut na
  // podstawie ich cen.
  // Funkcja przyjmuje jako argument data,
  // która jest obiektem zawierającym ceny różnych kryptowalut.


  //  return Object.keys(data)
  //  Object.keys(data) jest funkcją, która zwraca tablicę kluczy obiektu data.
  //  W kontekście tego kodu, kluczami są nazwy kryptowalut.

  //  .map(key => ({ key, value: data[key] }))
  //  Metoda .map() służy do przetwarzania każdego elementu tablicy.
  //  W tym przypadku, dla każdego klucza (nazwy kryptowaluty),
  //  tworzymy nowy obiekt, który ma właściwość key (nazwa kryptowaluty)
  //  i właściwość value (cena kryptowaluty).

  //  .sort((a, b) => b.value - a.value)
  //  Metoda .sort() służy do sortowania elementów tablicy.
  //  W tym przypadku, sortujemy tablicę obiektów na podstawie wartości value
  //  (ceny). a i b to obiekty porównywane w sortowaniu.
  //  Sortujemy od najwyższej ceny (największej wartości) do najniższej ceny (najmniejszej wartości).
}
