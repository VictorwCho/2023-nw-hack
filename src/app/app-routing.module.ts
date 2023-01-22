import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FindSubListingComponent } from './find-sub-listing/find-sub-listing.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', component: DashboardComponent},
=======
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', component: DashboardComponent},
>>>>>>> a8c9c27ac51ed0e2e8c80016f7bbd03d42fa726b
  { path: 'find-sub', component: FindSubListingComponent},
  { path: 'add-listing', component: AddPostComponent}
  ]




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
