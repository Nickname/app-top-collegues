import { Component, OnInit } from '@angular/core';
import { Collegue } from './../shared/domain/collegue'

import { CollegueService } from './../shared/service/collegue.service'

import { GlobalComponent } from './../shared/global/collegue.component'

@Component({
  selector: 'app-tableau-collegue',
  templateUrl: './tableau-collegue.component.html',
  styleUrls: ['./tableau-collegue.component.css']
})
export class TableauCollegueComponent extends GlobalComponent implements OnInit {

  constructor(protected collegueService:CollegueService) {
    super(collegueService)
  }

}
