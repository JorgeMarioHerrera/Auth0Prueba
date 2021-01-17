import { Component, Inject, OnInit } from '@angular/core';


// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  template: `
  <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button class="btn btn-danger" (click)="auth.logout({ returnTo: document.location.origin })">
        Salir
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button class="btn btn-primary" (click)="auth.loginWithRedirect()">Iniciar Sesión</button>
    </ng-template>
  `
})
export class LoginComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { }

  ngOnInit(): void {
  }

}
