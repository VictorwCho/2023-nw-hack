import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ListingService {

  private url = 'http://localhost:3000';
  constructor(private httpClient:HttpClient) { }

  addListing(listing:any) {
    console.log("add service")
    console.log(this.url)
    return this.httpClient.post(`${this.url}/api/addListing`,listing, {responseType: 'text'})
  }
}
