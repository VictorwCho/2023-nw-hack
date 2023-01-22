import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  sports_array = [
    "basketball",
    "volleyball",
    "ultimate frisbee",
  ]
  constructor() { }

  getSports () {
    return this.sports_array
  }
}
