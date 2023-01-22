import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  
})

export class AppComponent {
  title = 'nw-hacks-2023';

  constructor(public fbAuth: AngularFireAuth, private as: AuthService) {}

  logOut() {
    this.as.logout();
  }

}
