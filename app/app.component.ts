import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <nav class="navigation">
      <a href="/" class="logo hide-for-medium">
        <span class="font--color-primary">S</span><span class="font--color-secondary">C</span>
      </a>
      <a href="/" class="logo show-for-medium">
        <span class="font--color-primary">SARAH</span><span class="font--color-secondary">CLEVELAND</span>
      </a>
      <div class="navigation--links">
        <a class="navigation--link" routerLink="/about" routerLinkActive="active">About</a>
        <a class="navigation--link" routerLink="/web" routerLinkActive="active">Development</a>
        <a class="navigation--link" routerLink="/photography" routerLinkActive="active">Photography</a>
      </div>
    </nav>
	<router-outlet></router-outlet>
  `
})
export class AppComponent {
}