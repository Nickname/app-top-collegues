import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx'

import { Collegue } from '../domain/collegue'
import { environment } from '../../../environments/environment'

@Injectable()
export class CollegueService {
  subject:BehaviorSubject<Collegue[]> = new BehaviorSubject([])
  subjectSauvegarde:BehaviorSubject<Collegue> = new BehaviorSubject(null)

  constructor(private http:HttpClient) {  }

  observer():Observable<Collegue[]> {
    return this.subject.asObservable()
  }

  observerSauvegarde():Observable<Collegue> {
    return this.subjectSauvegarde.asObservable()
  }

  lister():Observable<Collegue[]>  {
    this.http.get<Collegue[]>(`${environment.apiUrl}/api/collegues`).subscribe((cols) => this.subject.next(cols))
    return this.subject.asObservable()
  }

  sauvegarder(newCollegue:Collegue):Observable<Collegue> {
    this.http.post<Collegue>(`${environment.apiUrl}/api/collegues`, newCollegue).subscribe(el => {
      const tab = this.subject.getValue()
      tab.push(newCollegue)
      this.subject.next(tab)
      this.subjectSauvegarde.next(el)
    })
    return this.subjectSauvegarde.asObservable()
  }

  aimer(unCollegue:Collegue):void {
    const tab = this.subject.getValue()
    let colModif = this.http.put<Collegue>(`${environment.apiUrl}/api/collegues/${unCollegue.id}`, {"avis" : true})
      .subscribe(el => {
        const tab = this.subject.getValue().map(col => {
          if (col.id == el.id) col.score = el.score
          return col
        })
        this.subject.next(tab)
      })
  }

  detester(unCollegue:Collegue):void {
    this.http.put<Collegue>(`${environment.apiUrl}/api/collegues/${unCollegue.id}`, {"avis" : false})
      .subscribe(el => {
        const tab = this.subject.getValue().map(col => {
          if (col.id == el.id) col.score = el.score
          return col
        })
        this.subject.next(tab)
      })
  }

  supprimer(unCollegue:Collegue):void {
    this.http.delete<Collegue>(`${environment.apiUrl}/api/collegues/${unCollegue.id}`)
      .subscribe(el => {
        const tab = this.subject.getValue().filter(col => col.id != el.id)
        this.subject.next(tab)
      })
  }

}
