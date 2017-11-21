import { Subject, BehaviorSubject } from 'rxjs/Rx'

import { Collegue } from './../domain/collegue'

import { CollegueService } from './../service/collegue.service'

export class GlobalComponent {
  public collegues:Collegue[] = [];

  public limite:number = 10;

  constructor (protected collegueService:CollegueService) { }

  ngOnInit() {
    this.collegueService.lister().subscribe((cols) => {
      this.collegues = cols
    })
  }

  // Pour trier un tableau, inutisé
  sort() {
    this.collegues.sort((c1:Collegue,c2:Collegue) => c1.nom.localeCompare(c2.nom))
  }

  jaime(col) {
    this.collegueService.aimer(col)
    return false
  }

  jedeteste(col) {
    this.collegueService.detester(col)
    return false
  }

  supprimer(col) {
    this.collegueService.supprimer(col)
    return false
  }

  limit($event) {
    this.limite = $event.target.value
  }
}
