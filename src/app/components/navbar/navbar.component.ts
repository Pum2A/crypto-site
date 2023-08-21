import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template:`
  <nav>
    <ul>
      <li routerLink="/home"><a [routerLinkActive]="'active'" >HOME</a></li>
      <li routerLink="/prices"><a [routerLinkActive]="'active'">CENY</a></li>
      <li routerLink="/rules"><a [routerLinkActive]="'active'">ZASADY</a></li>
    </ul>
  </nav>`,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

}
