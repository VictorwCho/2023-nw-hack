import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FindSubListingComponent } from './find-sub-listing/find-sub-listing.component';
import { AccountComponent } from './account/account.component';
import { ListingsResolver } from './listings.resolver';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'account', component: AccountComponent},
  { path: 'find teams', component: FindSubListingComponent, resolve: { message: ListingsResolver }},
  { path: 'find subs', component: AddPostComponent},
  { path: 'home',component: LandingPageComponent}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
