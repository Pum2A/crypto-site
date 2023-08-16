import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = 'https://data.binance.com/api/v3/ticker/24hr';




  constructor(private http: HttpClient) { }


  getData() {


    return this.http.get(this.apiUrl)
  }


  getDataLive() {


    return this.http.get(this.apiUrl)

  }


  searchCrypto(searchTerm: string): Observable<any> {
    const params = new HttpParams()
      .set('search', searchTerm); // Dodajmy parametr do zapytania

    const urlWithParams = this.apiUrl + '?' + params.toString();

    return this.http.get<any>(urlWithParams).pipe(
      catchError(error => {
        console.error('An error occurred while fetching data:', error);
        return throwError('Something went wrong. Please try again later.');
      })
    );
  }






}
