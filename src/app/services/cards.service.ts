import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { ICartas } from '../models/ICartas';
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

     getCards(): Observable<ICartas>{
        return this.httpClient.get<ICartas>(this.apiUrl + 'cards')
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
