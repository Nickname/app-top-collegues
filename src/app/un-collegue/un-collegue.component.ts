import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue'

import { CollegueService } from '../shared/service/collegue.service'

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  // paramètre d'entrée "collegue"
  @Input() collegue: Collegue;

  constructor(private collegueService: CollegueService) { }

  ngOnInit() {
  }

  jaime() {
    this.collegueService.aimer(this.collegue)
    return false
  }

  jedeteste() {
    this.collegueService.detester(this.collegue)
    return false
  }

}
