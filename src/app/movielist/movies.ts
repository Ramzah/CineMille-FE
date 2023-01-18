export class Movies {
  titolo: string;
  nomeSala: string;
  dataOrario: string;

  constructor(titolo: string, nomeSala: string, dataOrario: string) {
    this.titolo = titolo;
    this.nomeSala = nomeSala;
    this.dataOrario = dataOrario;
  }
}
