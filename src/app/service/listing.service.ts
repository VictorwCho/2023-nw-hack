import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListingService {

  private url = 'http://localhost:3000';
  private listings$ = new Subject();

  constructor(private httpClient:HttpClient) { }

  private refreshListings() {
    this.httpClient.get(`${this.url}/api/getListings`)
      .subscribe(listings => {
        this.listings$.next(listings)
      })
  }

  getListings() {
    console.log("getting listings");
    this.refreshListings();
    return this.listings$;
  }

  addListing(listing:any) {
    console.log("add service")
    console.log(this.url)
    return this.httpClient.post(`${this.url}/api/addListing`,listing, {responseType: 'text'})
  }
}
