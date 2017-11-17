import { Collegue } from './../domain/collegue'

import { CollegueService } from './../service/collegue.service'

export class GlobalComponent {
  protected collegues:Collegue[] = [];

  constructor (protected collegueService:CollegueService) { }

  ngOnInit() {
    this.collegueService.lister().then((cols) => {
      this.collegues = cols
      this.sort()
    })
  }

  sort() {
    this.collegues.sort((c1:Collegue,c2:Collegue) => c1.nom.localeCompare(c2.nom))
  }

  jaime(col) {
    this.collegueService.aimer(col)
      .then((col1) => {
        this.collegues = this.collegues.filter((collegue) => collegue.id != col1.id)
        this.collegues.push(col1)
        this.sort()
      })
    return false
  }

  jedeteste(col) {
    this.collegueService.detester(col)
      .then((col1) => {
        this.collegues = this.collegues.filter((collegue) => collegue.id != col1.id)
        this.collegues.push(col1)
        this.sort()
      })
    return false
  }
}
