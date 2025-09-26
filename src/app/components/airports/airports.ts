import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AirportService } from '../../services/airport.service';
import { Airport } from '../../models/airport.interface';

@Component({
  selector: 'app-airports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './airports.html',
  styleUrls: ['./airports.css']
})
export class Airports implements OnInit {
  airports: Airport[] = [];
  filteredAirports: Airport[] = [];
  searchTerm = '';

  constructor(private airportService: AirportService) {}

  ngOnInit() {
    this.airportService.getAirports().subscribe(data => {
      this.airports = data;
      this.filteredAirports = data;
   });
  }

  filterAirports() {
    this.filteredAirports = this.airportService.filterAirports(this.airports, this.searchTerm);
  }

}
