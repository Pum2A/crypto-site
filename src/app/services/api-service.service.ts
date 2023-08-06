import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


// interface Environment {
//   production: boolean;
//   apiKey: string;
//   // inne zmienne środowiskowe...
// }



@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = 'http://api.coinlayer.com/list';
  private apiKey = environment.apiKey;





  constructor(private http: HttpClient) { }


  getData(): Observable<any> {
    const params = new HttpParams().set('access_key', this.apiKey);
    const urlWithParams = this.apiUrl + '?' + params.toString();


    return this.http.get<any>(urlWithParams).pipe(
      catchError(error => {
        console.error('Wystąpił błąd podczas pobierania danych:', error);
        return throwError('Coś poszło nie tak. Spróbuj ponownie później.');
      })
    );
  }
}
