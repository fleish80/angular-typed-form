import {Component} from '@angular/core';
import {RouterLinkWithHref, RouterOutlet} from '@angular/router';

@Component({
  selector: 'angular-typed-form-root',
  template: `
    <nav class="nav">
      <a routerLink="/form-control-nullable">Form control nullable</a>
      <a routerLink="/form-control-not-nullable">Form control not nullable</a>
      <a routerLink="/form-builder-not-nullable">Form builder not nullable</a>
      <a routerLink="/form-record">Form record</a>
      <a routerLink="/untyped">Untyped</a>
    </nav>
    <router-outlet></router-outlet>`,
  styles: [`
    .nav {
      display: flex;
      gap: 10px;
      margin-block-end: 10px;
    }
  `],
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLinkWithHref
  ]
})
export class AppComponent {

}
