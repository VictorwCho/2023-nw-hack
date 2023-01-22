import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sports:any[]

  constructor(private ds: DashboardService, private router: Router) {
    this.sports = []
  }

  navigateTo(event:any) {
    // console.log(event.target.innerText)
    let target_name = event
    let blah = target_name.toLowerCase()
    console.log(typeof(blah))
    console.log(blah)
    this.router.navigate([`${blah}`])
  }
  ngOnInit(): void {
    this.sports = this.ds.getSports()
    console.log(this.sports)
  }
}
