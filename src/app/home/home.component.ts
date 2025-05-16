import { Component, OnInit } from '@angular/core';
import { Airline } from '../airline/airline';
import { AirlineService } from '../airline/airline.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false
})
export class HomeComponent implements OnInit {
  airlines: Airline[] = [];

  constructor(private airlineService: AirlineService) { }

  ngOnInit() {
    this.getAirlines();
  }

  getAirlines() {
    this.airlineService.getAirlines().subscribe(airlines => {
      this.airlines = airlines;
    });
  }
}