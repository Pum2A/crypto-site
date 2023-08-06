import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template:`
  <nav>
    <ul>
      <li><a>HOME</a></li>
      <li><a>CRYPTO PRICES</a></li>
      <li><a>RULES</a></li>
    </ul>
  </nav>`,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

}
