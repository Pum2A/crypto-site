import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
@Component({
  selector: 'app-home',
 template: `
 <main>




   <div class="top5-crypto-container">
     <div class="content-container">
       <h3>PRZYKŁADOWE KURSY KRYPTOWALUT</h3>
      </div>
      <div class="slider-container">

        <ng-image-slider  [images]="slides" #nav [imageSize]="{width:125, height:125}" [imagePopup]="false" [autoSlide]="1" [infinite]="true"> [animationSpeed]="0.1" [imagePopup]="true"

        <img
        *ngFor="let slide of slides"
        class="slider-image"
      />

        </ng-image-slider>
      </div>






       <!-- <li *ngFor="let crypto of cryptoData.slice(0, limit)">
         Symbol: {{ crypto.symbol }} <br>
         Name: {{ crypto.name }} <br>
         Full Name: {{ crypto.name_full }} <br>
         Max Supply: {{ crypto.max_supply }} <br>
         <img [src]="crypto.icon_url" alt="Icon">
        </li> -->
    </div>
    <section id="main-content">

      <div class="content">

        <div class="h4-container">

          <h4>O NAS</h4>
        </div>
        <ul>

          <li> <strong>Witaj na Crypto-Site! Jesteśmy pasjonatami i entuzjastami świata kryptowalut... </strong> </li>
          <li>Naszą misją jest demystyfikacja skomplikowanego świata kryptowalut i udostępnienie Ci klarownych, rzetelnych i zrozumiałych informacji...</li>
    <li>Nasza redakcja składa się z ekspertów w dziedzinie technologii blockchain, finansów i rynków kryptowalutowych...</li>
    <li>Analizy, przewidywania i komentarze oparte na dogłębnej wiedzy i badaniach.</li>
    <li>Aktualne wiadomości o nowych projektach, innowacjach, wydarzeniach rynkowych i wiele więcej.</li>
  </ul>
</div>
<div class="content">
  <div class="h4-container">

          <h4>NAJNOWSZE INFORMACJE KRYPTO</h4>
        </div>
<ul>
<li><strong>1. "Bitcoin Znowu Pobił Rekord Cenowy"</strong></li>
<li>Bitcoin osiągnął nowy rekord cenowy, przekraczając wartość 70 000 USD za jednego Bitcoina. Wzrost ten jest wynikiem rosnącego zainteresowania inwestorów instytucjonalnych oraz akceptacji kryptowalut przez firmy i instytucje finansowe.</li>
<li><strong>2. "Ethereum 2.0 Wchodzi W Nowy Etap Rozwoju"</strong></li>
<li>Ethereum, druga co do wielkości kryptowaluta, przejdzie na nową wersję protokołu o nazwie Ethereum 2.0. Ten krok ma na celu poprawienie wydajności, skalowalności i bezpieczeństwa sieci.</li>
<li><strong>3. "Chiny Przygotowują Własną Kryptowalutę Państwową"
  </strong>
</li>
<li>Chiński Bank Ludowy ogłosił plany wprowadzenia własnej kryptowaluty państwowej o nazwie e-yuan. Chiny chcą tym samym nadzorować płatności cyfrowe i zdobyć kontrolę nad rozwojem kryptowalut w kraju.</li>
<li><strong>4.  "NFT Continues to Make Waves in Art and Entertainment"
</strong></li>
<li>Non-fungible tokens (NFTs) nadal rewolucjonizują świat sztuki i rozrywki, umożliwiając artystom i twórcom zarabianie na swoich cyfrowych dziełach oraz tworzenie unikalnych doświadczeń dla fanów.</li>


</ul>
</div>

</section>
<section id="second-main-content">

  <div class="content2">
    <div class="h4-container">

      <h4>RANKING KRYPTOWALUT</h4>
    </div>
    <ul>
      <li *ngFor="let crypto of cryptoData.slice(0, limit)">
         Symbol: {{ crypto.symbol }} <br>
         Name: {{ crypto.name }} <br>
         Full Name: {{ crypto.name_full }} <br>
         Max Supply: {{ crypto.max_supply }} <br>
         <img [src]="crypto.icon_url" alt="Icon">
        </li>

      </ul>
    </div>
  <div class="content">
    <div class="h4-container">

      <h4>FAQ</h4>
    </div>
    <ul>
      <li><strong>1. "Bitcoin Znowu Pobił Rekord Cenowy"</strong></li>
      <li>Bitcoin osiągnął nowy rekord cenowy, przekraczając wartość 70 000 USD za jednego Bitcoina. Wzrost ten jest wynikiem rosnącego zainteresowania inwestorów instytucjonalnych oraz akceptacji kryptowalut przez firmy i instytucje finansowe.</li>
      <li><strong>2. "Ethereum 2.0 Wchodzi W Nowy Etap Rozwoju"</strong></li>
      <li>Ethereum, druga co do wielkości kryptowaluta, przejdzie na nową wersję protokołu o nazwie Ethereum 2.0. Ten krok ma na celu poprawienie wydajności, skalowalności i bezpieczeństwa sieci.</li>
      <li><strong>3. "Chiny Przygotowują Własną Kryptowalutę Państwową"
        </strong>
      </li>
      <li>Chiński Bank Ludowy ogłosił plany wprowadzenia własnej kryptowaluty państwowej o nazwie e-yuan. Chiny chcą tym samym nadzorować płatności cyfrowe i zdobyć kontrolę nad rozwojem kryptowalut w kraju.</li>
      <li><strong>4.  "NFT Continues to Make Waves in Art and Entertainment"
        </strong></li>
        <li>Non-fungible tokens (NFTs) nadal rewolucjonizują świat sztuki i rozrywki, umożliwiając artystom i twórcom zarabianie na swoich cyfrowych dziełach oraz tworzenie unikalnych doświadczeń dla fanów.</li>


      </ul>
    </div>
  </section>




    </main>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
currencies: any[] = [];
  cryptoData: any[] = [];
  fiatData: any[] = [];
  limit = 3;

  slides: Array<object>= [];

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

        this.slides = this.cryptoData.map(crypto => {
          return {
            image: crypto.icon_url,
            thumbImage: crypto.icon_url,
            alt: crypto.name,
            title: crypto.name
          };
        });
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
