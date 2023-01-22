import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListingService {

  private url = 'http://localhost:3000';
  private listings$ = new Subject();
  listings: any;

  constructor(private httpClient:HttpClient) { 
    this.listings = [];
  }

  private refreshListings() {
    this.httpClient.get(`${this.url}/api/getListings`)
      .subscribe(listings => {
        this.listings = listings;
        console.log("refresh", this.listings)
        this.listings$.next(listings)
      })
  }

  getListings() {
    console.log("getting listings");
    this.refreshListings();
    return this.listings$;
  }

  addListing(listing:any) {
    this.httpClient.post(`${this.url}/api/addListing`, listing).subscribe(data => {
      console.log(data)
    })
  }
}
