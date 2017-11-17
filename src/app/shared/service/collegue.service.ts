import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Collegue } from '../domain/collegue'

@Injectable()
export class CollegueService {

  constructor(private http:HttpClient) {  }

  lister():Promise<Collegue[]> {
    return this.http.get<Collegue[]>('http://localhost:8080/api/collegues').toPromise()
  }

  sauvegarder(newCollegue:Collegue):Promise<Collegue> {
    return this.http.post<Collegue>('http://localhost:8080/api/collegues', newCollegue).toPromise()
  }

  aimer(unCollegue: Collegue):Promise<Collegue> {
    return this.http.put<Collegue>(`http://localhost:8080/api/collegues/${unCollegue.id}`, {"avis" : true}).toPromise()
  }

  detester(unCollegue: Collegue): Promise<Collegue> {
    return this.http.put<Collegue>(`http://localhost:8080/api/collegues/${unCollegue.id}`, {"avis" : false}).toPromise()
  }

}
