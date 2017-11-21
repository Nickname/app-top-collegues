import { Component, OnInit } from '@angular/core';
import { Collegue } from './../shared/domain/collegue'

import { CollegueService } from './../shared/service/collegue.service'

import { GlobalComponent } from './../shared/global/collegue.component'

@Component({
  selector: 'app-card-collegue',
  templateUrl: './card-collegue.component.html',
  styleUrls: ['./card-collegue.component.css']
})
export class CardCollegueComponent extends GlobalComponent implements OnInit {

  constructor(protected collegueService:CollegueService) {
    super(collegueService)
  }
}
