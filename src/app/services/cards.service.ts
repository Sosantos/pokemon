import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class CardsService {
    apiUrl: string;
    constructor(private httpClient: HttpClient){
        this.apiUrl = environment.APIURL;
     }

     getCards(nome?: string): Observable<any>{
        let url = this.apiUrl + 'cards';
        url = nome ? url + '?name=' + nome : url;
        return this.httpClient.get<any>(url)
        .pipe(
          retry(2),
          catchError(this.handleError));
    }

    getCard(id): Observable<any>{
        return this.httpClient.get<any>(this.apiUrl + 'cards/' + id)
        .pipe(
          retry(2),
          catchError(this.handleError));
    }

    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }

  }
