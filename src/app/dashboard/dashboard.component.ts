import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sports:any[]

  constructor(private ds: DashboardService) {
    this.sports = []
  }
  ngOnInit(): void {
    this.sports = this.ds.getSports()
    console.log(this.sports)
  }
}
