import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipo } from '../equipo';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  // Base url
  baseurl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // POST
  CreateEquipo(data: any): Observable<Equipo> {
    return this.http
      .post<Equipo>(
        this.baseurl + '/equipos/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  GetEquipo(id: any): Observable<Equipo> {
    return this.http
      .get<Equipo>(this.baseurl + '/equipos/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET ALL
  GetEquipos(): Observable<Equipo> {
    return this.http
      .get<Equipo>(this.baseurl + '/equipos/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // PUT
  UpdateEquipo(id: any, data: any): Observable<Equipo> {
    return this.http
      .put<Equipo>(
        this.baseurl + '/equipos/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // DELETE
  DeleteEquipo(id: any) {
    return this.http
      .delete<Equipo>(this.baseurl + '/equipos/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Error handling
  errorHandl(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
