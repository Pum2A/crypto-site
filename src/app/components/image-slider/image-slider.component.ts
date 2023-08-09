import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent {
  constructor(private apiService: ApiServiceService) {}
  currencies: any[] = [];
  cryptoData: any[] = [];
  fiatData: any[] = [];
  limit = 5;

  slides: Array<object>= [];



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
