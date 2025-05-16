import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AirlineService } from '../airline.service';

@Component({
  selector: 'app-airline-detail',
  templateUrl: './airline-detail.component.html',
  styleUrls: ['./airline-detail.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AirlineDetailComponent implements OnInit {
  airlineId!: string;
  airline: any = {};

  constructor(
    private route: ActivatedRoute,
    private airlineService: AirlineService
  ) { }

  ngOnInit() {
    this.airlineId = this.route.snapshot.paramMap.get('id') || '';
    if (this.airlineId) {
      this.getAirlineDetail();
    }
  }

  getAirlineDetail() {
    this.airlineService.getAirline(this.airlineId).subscribe(data => {
      this.airline = data;
    });
  }
}