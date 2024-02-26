import { Component, OnInit } from '@angular/core';
import { AuthModule, AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-auth0';

  constructor(public auth: AuthService) {}
}
