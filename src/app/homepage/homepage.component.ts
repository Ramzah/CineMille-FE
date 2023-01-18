import { Component, ViewChild } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MovielistComponent } from '../movielist/movielist.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  // La data che useremo per effettuare le richieste al nostro servizio REST nel backend
  fullDate = '';
  /**
   * Formattiamo la data iniziale immessa dall'utente e la inseriamo nella variabile fullDate.
   * @param event Evento emesso dal DatePicker quando viene inserita una nuova data iniziale.
   */
  onStartDate(event: MatDatepickerInputEvent<Date>) {
    const valori = event.value;
    if (valori != null) {
      this.fullDate =
        'dataInizio=' +
        valori?.getFullYear() +
        '-' +
        (valori?.getMonth()! + 1) +
        '-' +
        valori?.getDate();
    }
  }

  /**
   * Formattiamo la data finale immessa dall'utente e la inseriamo in coda alla variabile fullDate.
   * Effettuiamo poi la chiamata a updateMovies() nel child movielistComponent per aggiornare la lista.
   * @param event Evento emesso dal DatePicker quando viene inserita una nuova data finale.
   */
  onEndDate(event: MatDatepickerInputEvent<Date>) {
    const valori = event.value;
    if (valori != null) {
      this.fullDate = this.fullDate.concat(
        '&dataFine=' +
          valori?.getFullYear() +
          '-' +
          (valori?.getMonth()! + 1) +
          '-' +
          valori?.getDate()
      );
      this.movielistComponent.updateMovies(this.fullDate);
    }
  }
  // Necessario per accedere a updateMovies(date: string) nel componente child movielistComponent.
  @ViewChild(MovielistComponent)
  movielistComponent!: MovielistComponent;
}
