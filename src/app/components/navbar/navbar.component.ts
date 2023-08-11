import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template:`
  <nav>
    <ul>
      <li routerLink="/home"><a>HOME</a></li>
      <li routerLink="/prices"><a>PRICES</a></li>
      <li routerLink="/rules"><a>RULES</a></li>
    </ul>
  </nav>`,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

}
