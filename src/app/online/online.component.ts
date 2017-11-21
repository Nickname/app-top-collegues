import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Rx'

import { environment } from '../../environments/environment'

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {
  online:string = "En ligne"

  constructor(private http:HttpClient) { }

  ngOnInit() {
    const ping = this.http.get(`${environment.apiUrl}/api`)
    Observable.interval(5000).subscribe(smtg => ping
      .subscribe(ok => {
        this.online = "En ligne"
      }, error => {
        this.online = "Hors ligne"
      }))
  }



}
