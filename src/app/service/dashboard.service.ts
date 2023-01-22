import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  sports_array = [
    "Find Subs",
    "Find Teams",
    "Pick-Up Events",
    "Workshops",
    "My Account",
  ]
  constructor() { }

  getSports() {
    return this.sports_array
  }
}
