import { Injectable } from '@angular/core';

import { Collegue } from '../domain/collegue'

@Injectable()
export class CollegueService {

  private collegues:Collegue[] = []

  constructor() { }

  lister():Promise<Collegue[]> {
    return new Promise((resolve, reject) => {
      if (this.collegues != null) resolve(this.collegues)
      else reject(null)
    })
  }

  sauvegarder(...newCollegue:Collegue[]):Promise<Collegue[]> {
    return new Promise((resolve, reject) => {
      newCollegue.forEach((col) => {
        this.collegues.push(col)
      })

      resolve(newCollegue)
    })
  }

  aimer(unCollegue:Collegue):Promise<Collegue> {
    return new Promise((resolve, reject) => {
      let [leCollegue, ...leReste] = this.collegues.filter((col) => col.nom == unCollegue.nom)
                                              .map((col) => {
                                                col.score += 10
                                                return col})

      if (leReste.length > 0) reject("")
      else resolve(leCollegue)
    })
  }

  detester(unCollegue:Collegue):Promise<Collegue> {
    return new Promise((resolve, reject) => {
      let [leCollegue, ...leReste] = this.collegues.filter((col) => col.nom == unCollegue.nom)
                                              .map((col) => {
                                                col.score -= 5
                                                return col})

      if (leReste.length > 0) reject("")
      else resolve(leCollegue)
    })
  }

}
