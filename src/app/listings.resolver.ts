import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { ListingService } from './service/listing.service';

@Injectable({
  providedIn: 'root'
})
export class ListingsResolver {

  constructor(private ls:ListingService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.ls.getListings();
  }
}
