import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movies } from '../movielist/movies';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  constructor(private http: HttpClient) {}

  //Prende la lista film dal database e mappa la risposta JSON nella classe Movies
  getMovies(url: string) {
    return this.http.get<Movies[]>(url).pipe(
      map((data: Movies[]) => {
        return data;
      })
    );
  }
}
