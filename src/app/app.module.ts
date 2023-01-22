import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

// const firebaseUiAuthConfig: firebaseui.auth.Config = {
//   signInFlow: 'popup',
//   signInOptions: [
//       {
//           scopes: [
//               'public_profile',
//               'email',
//               'user_likes',
//               'user_friends'
//           ],
//           customParameters: {
//               'auth_type': 'reauthenticate'
//           },
//           provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
//       },
//       {
//           requireDisplayName: false,
//           provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
//       },
//   ],
//   //term of service
//   tosUrl: '<your-tos-link>',
//   //privacy url
//   privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
//   //credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
//   credentialHelper: firebaseui.auth.CredentialHelper.NONE
// };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
    // AngularFireAuthModule,
    // FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
