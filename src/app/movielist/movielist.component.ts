import { Component, Input, OnInit } from '@angular/core';
import { MovieServiceService } from '../services/movieService.service';
import { Movies } from './movies';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css'],
})
export class MovielistComponent implements OnInit {
  // Lista dei film da movieService in formato Movies
  listafilm: Movies[] = [];
  // Lista dei film filtrati (solo il titolo)
  listafilmFiltered: string[] = [];
  // URL generico dell'endpoint che vogliamo raggiungere del nostro Backend
  url = 'http://localhost:8080/programmazione/';

  constructor(private mService: MovieServiceService) {}

  /**
   * Aggiungiamo all'url l'indirizzo del nostro servizio REST
   * da cui estraiamo solo i titoli che poi inseriamo
   * nella variabile listafilmFiltered
   */
  ngOnInit(): void {
    this.mService
      .getMovies(this.url + 'storico')
      .subscribe((data: Movies[]) => {
        this.listafilm = data;

        this.listafilmFiltered = this.listafilm.map(
          (a: { titolo: string }) => a.titolo
        );
        this.listafilmFiltered = [...new Set(this.listafilmFiltered)];
      });
  }

  /**
   * Effettuiamo una nuova chiamata al Backend per ricevere la lista dei film
   * contenuti nell'intervallo di date selezionato, come in ngOnInit().
   * @param date L'intervallo di date selezionato, in formato dataInizio=YYYY/MM/DD&dataFine=YYYY/MM/DD
   */
  updateMovies(date: string) {
    this.mService
      .getMovies(this.url + 'lista?' + date)
      .subscribe((data: Movies[]) => {
        this.listafilm = data;

        this.listafilmFiltered = this.listafilm.map(
          (a: { titolo: string }) => a.titolo
        );
        this.listafilmFiltered = [...new Set(this.listafilmFiltered)];
      });
  }
}
