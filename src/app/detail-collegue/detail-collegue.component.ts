import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GlobalComponent } from './../shared/global/collegue.component'

import { CollegueService } from './../shared/service/collegue.service'
import { Collegue } from './../shared/domain/collegue'

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.css']
})
export class DetailCollegueComponent extends GlobalComponent implements OnInit {
  collegue:Collegue

  nom:string

  constructor(private route:ActivatedRoute, private location:Location, protected collegueService:CollegueService) {
    super(collegueService)
    route.params.subscribe(params => { this.nom = params['nom']; });

    collegueService.observer().subscribe((cols) => {
      console.log(cols)
      this.collegue = cols.find((col) => col.nom == this.nom)
    })
  }

  ngOnInit() {
  }

  backButton() {
    this.location.back();
  }

}
