import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
@Component({
  selector: 'app-home',
  template: `
    <main>
      <div class="top5-crypto-container">
        <div class="content-container">
          <h3>PRZYKŁADOWE KRYPTOWALUTY</h3>
        </div>

        <div class="slider-container">
          <li *ngFor="let crypto of cryptos.splice(0, limit)">
            <span>
              {{ crypto.symbol }}
</span>
            Price Change:{{ crypto.priceChange }}
            Price Change Percent:{{ crypto.priceChangePercent }}
            Weighted Average Price:{{ crypto.weightedAvgPrice }}
          </li>
        </div>
      </div>
      <section id="main-content">
        <div class="content">
          <div class="h4-container">
            <h4>O NAS</h4>
          </div>
          <ul>
            <li>
              <strong
                >Witaj na Crypto-Site! Jesteśmy pasjonatami i entuzjastami
                świata kryptowalut...
              </strong>
            </li>
            <li>
              Naszą misją jest demystyfikacja skomplikowanego świata kryptowalut
              i udostępnienie Ci klarownych, rzetelnych i zrozumiałych
              informacji...
            </li>
            <li>
              Nasza redakcja składa się z ekspertów w dziedzinie technologii
              blockchain, finansów i rynków kryptowalutowych...
            </li>
            <li>
              Analizy, przewidywania i komentarze oparte na dogłębnej wiedzy i
              badaniach.
            </li>
            <li>
              Aktualne wiadomości o nowych projektach, innowacjach, wydarzeniach
              rynkowych i wiele więcej.
            </li>
          </ul>
        </div>
        <div class="content">
          <div class="h4-container">
            <h4>NAJNOWSZE INFORMACJE KRYPTO</h4>
          </div>
          <ul>
            <li><strong>1. "Bitcoin Znowu Pobił Rekord Cenowy"</strong></li>
            <li>
              Bitcoin osiągnął nowy rekord cenowy, przekraczając wartość 70 000
              USD za jednego Bitcoina. Wzrost ten jest wynikiem rosnącego
              zainteresowania inwestorów instytucjonalnych oraz akceptacji
              kryptowalut przez firmy i instytucje finansowe.
            </li>
            <li>
              <strong>2. "Ethereum 2.0 Wchodzi W Nowy Etap Rozwoju"</strong>
            </li>
            <li>
              Ethereum, druga co do wielkości kryptowaluta, przejdzie na nową
              wersję protokołu o nazwie Ethereum 2.0. Ten krok ma na celu
              poprawienie wydajności, skalowalności i bezpieczeństwa sieci.
            </li>
            <li>
              <strong
                >3. "Chiny Przygotowują Własną Kryptowalutę Państwową"
              </strong>
            </li>
            <li>
              Chiński Bank Ludowy ogłosił plany wprowadzenia własnej
              kryptowaluty państwowej o nazwie e-yuan. Chiny chcą tym samym
              nadzorować płatności cyfrowe i zdobyć kontrolę nad rozwojem
              kryptowalut w kraju.
            </li>
            <li>
              <strong
                >4. "NFT Continues to Make Waves in Art and Entertainment"
              </strong>
            </li>
            <li>
              Non-fungible tokens (NFTs) nadal rewolucjonizują świat sztuki i
              rozrywki, umożliwiając artystom i twórcom zarabianie na swoich
              cyfrowych dziełach oraz tworzenie unikalnych doświadczeń dla
              fanów.
            </li>
          </ul>
        </div>
      </section>
      <section id="second-main-content">

        <div class="content">
          <div class="h4-container">
            <h4>FAQ</h4>
          </div>
          <ul>
            <li><strong>1. "Bitcoin Znowu Pobił Rekord Cenowy"</strong></li>
            <li>
              Bitcoin osiągnął nowy rekord cenowy, przekraczając wartość 70 000
              USD za jednego Bitcoina. Wzrost ten jest wynikiem rosnącego
              zainteresowania inwestorów instytucjonalnych oraz akceptacji
              kryptowalut przez firmy i instytucje finansowe.
            </li>
            <li>
              <strong>2. "Ethereum 2.0 Wchodzi W Nowy Etap Rozwoju"</strong>
            </li>
            <li>
              Ethereum, druga co do wielkości kryptowaluta, przejdzie na nową
              wersję protokołu o nazwie Ethereum 2.0. Ten krok ma na celu
              poprawienie wydajności, skalowalności i bezpieczeństwa sieci.
            </li>
            <li>
              <strong
                >3. "Chiny Przygotowują Własną Kryptowalutę Państwową"
              </strong>
            </li>
            <li>
              Chiński Bank Ludowy ogłosił plany wprowadzenia własnej
              kryptowaluty państwowej o nazwie e-yuan. Chiny chcą tym samym
              nadzorować płatności cyfrowe i zdobyć kontrolę nad rozwojem
              kryptowalut w kraju.
            </li>
            <li>
              <strong
                >4. "NFT Continues to Make Waves in Art and Entertainment"
              </strong>
            </li>
            <li>
              Non-fungible tokens (NFTs) nadal rewolucjonizują świat sztuki i
              rozrywki, umożliwiając artystom i twórcom zarabianie na swoich
              cyfrowych dziełach oraz tworzenie unikalnych doświadczeń dla
              fanów.
            </li>
          </ul>
        </div>
      </section>
    </main>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  currencies: any[] = [];
  cryptoData: any[] = [];
  fiatData: any[] = [];
  min = 1;
  max = 3;

  limit = Math.floor(Math.random() * (this.max - this.min) + this.min)
  cryptos: any;


  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {
    this.getData();
    console.log(this.limit)
  }

  getData(): void {
    this.apiService.getData().subscribe((response) => {
      this.cryptos = response;
      console.log(response)
    });
  }



}
