import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FindSubListingComponent } from './find-sub-listing/find-sub-listing.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'find-sub', component: FindSubListingComponent},
  { path: 'add-listing', component: AddPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
