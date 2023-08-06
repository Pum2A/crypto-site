import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  template: `
  <header>

    <div class="top">
      <div class="content-container">

        <div class="logo-container">
          <span routerLink="home">CRYPTO</span>
        </div>
        <app-navbar>

          </app-navbar>
        </div>
      </div>
  </header>


  `,

  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

}
