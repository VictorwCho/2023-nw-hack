import { Component } from '@angular/core';
import { ListingService } from 'app/service/listing.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-find-sub-listing',
  templateUrl: './find-sub-listing.component.html',
  styleUrls: ['./find-sub-listing.component.css']
})
export class FindSubListingComponent {
  
  listings$ = new Observable();
  listings = [
    {user: "lchow",title:"Player needed", location: "SFU Burnaby", date: "01/01/2023", sport:"volleyball",gender:"Male", skillLevel: "Intermediate"},
    {user: "vcho",title:"1 sub for volleyball!", location: "Harry Jerome", date: "05/01/2023",sport:"basketball", gender:"Female", skillLevel: "Beginner"},
    {user: "clau",title:"1 sub for volleyball!", location: "Harry Jerome", date: "05/01/2023",sport:"basketball", gender:"Female", skillLevel: "Beginner"},
    {user: "test",title:"Need one ASAP!", location: "Harry Jerome", date: "05/01/2023",sport:"basketball", gender:"Female", skillLevel: "Beginner"},
    {user: "test",title:"Need one ASAP!", location: "Harry Jerome", date: "05/01/2023",sport:"basketball", gender:"Female", skillLevel: "Beginner"},
    {user: "test",title:"Need one ASAP!", location: "Harry Jerome", date: "05/01/2023",sport:"basketball", gender:"Female", skillLevel: "Beginner"},
    {user: "test",title:"Need one ASAP!", location: "Harry Jerome", date: "05/01/2023",sport:"basketball", gender:"Female", skillLevel: "Beginner"},
    {user: "test",title:"Need one ASAP!", location: "Harry Jerome", date: "05/01/2023",sport:"basketball", gender:"Female", skillLevel: "Beginner"}
  ]

  constructor(private ls:ListingService) {

  }

  ngOnInit() {
    console.log(this.fetchListings())
    
  }

  private fetchListings() {
    this.listings$ = this.ls.getListings();
  }


}
