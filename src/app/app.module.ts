import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './add-post/add-post.component';
import { FindSubListingComponent } from './find-sub-listing/find-sub-listing.component';

import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
import {AngularFireModule} from '@angular/fire/compat';
// import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
// import { provideAuth,getAuth } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListingService } from './service/listing.service';
import { HttpClientModule } from '@angular/common/http';



const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
      {
          scopes: [
              'public_profile',
              'email',
              'user_likes',
              'user_friends'
          ],
          customParameters: {
              'auth_type': 'reauthenticate'
          },
          provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
      },
      {
          requireDisplayName: false,
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
      },
  ],
  //term of service
  tosUrl: '<your-tos-link>',
  //privacy url
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  //credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
  credentialHelper: firebaseui.auth.CredentialHelper.NONE
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    AddPostComponent,
    FindSubListingComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ListingService
=======
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule

>>>>>>> a8c9c27ac51ed0e2e8c80016f7bbd03d42fa726b
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
