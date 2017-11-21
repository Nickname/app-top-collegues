import { Component } from '@angular/core';
import { Collegue } from './shared/domain/collegue'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks'

import { CollegueService } from './shared/service/collegue.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string = 'app'
  afficherSucces: boolean
  collegues:Collegue[] = []

  constructor(private collegueService:CollegueService) {  }

  ngOnInit() {
      this.afficherSucces = false

      this.collegueService.lister()
        .subscribe((cols) => this.collegues = cols)
  }

  add(pseudo:HTMLInputElement, imageUrl:HTMLInputElement) {
    this.collegueService.sauvegarder(new Collegue(pseudo.value, imageUrl.value, 30))
    pseudo.value = "";
    imageUrl.value = "";

    this.afficherSucces = true

    return false;
  }
}
