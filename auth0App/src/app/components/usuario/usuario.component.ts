import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-usuario',
  template: `
  <div >
    <h3>Datos de Usuario</h3>
    <div class="row">
      <div class="col">
        <table>
  <ul *ngIf="auth.user$ | async as user">
      <li>{{ user.name }}</li>
      <li>{{ user.email }}</li>
      <li>{{ user.last_ip }}</li>
      <li>{{ user.last_login }}</li>
      <li><img src="{{ user.picture }}" alt="Italian Trulli"></li>
    </ul>
    <div *ngIf="auth.user$ | async as user">
      {{ user | json}}
    </div>
    </table>
</div>
</div>
  `
})
export class UsuarioComponent implements OnInit {

  constructor(public auth: AuthService) {
    console.log(auth.user$);
  }

  ngOnInit(): void {
  }

}
