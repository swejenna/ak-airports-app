import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Airport as AirportModel } from '../models/airport.interface';

@Injectable({
  providedIn: 'root'
})
export class AirportService {
  private apiUrl = 'https://511.alaska.gov/help/endpoint/airports';

  constructor(private http: HttpClient) {}

  getAirports(): Observable<AirportModel[]> {
    return this.http.get<AirportModel[]>(this.apiUrl);
  }

  filterAirports(airports: AirportModel[], searchTerm: string): AirportModel[] {
    if (!searchTerm) return airports;
    
    searchTerm = searchTerm.toLowerCase();
    return airports.filter(airport => 
      airport.name?.toLowerCase().includes(searchTerm) ||
      airport.id?.toLowerCase().includes(searchTerm) ||
      airport.faaid?.toLowerCase().includes(searchTerm) ||
      airport.owner?.toLowerCase().includes(searchTerm) ||
      airport.region?.toLowerCase().includes(searchTerm)
    );
  }
}