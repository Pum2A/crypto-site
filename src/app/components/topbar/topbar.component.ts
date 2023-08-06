import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  template: `
  <header>

    <div class="top">
      <div class="content-container">

        <div class="logo-container">
          <span routerLink="home">crypto</span>
        </div>
        <app-navbar>

          </app-navbar>
        </div>
      </div>
      <div class="h1-container">
        <h1>crypto czyli POTĘGA KRYPTOWALUT</h1>
        <h2>Witaj na naszej stronie!</h2>
      </div>
  </header>


  `,

  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

}
