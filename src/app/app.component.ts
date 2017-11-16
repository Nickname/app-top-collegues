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

  constructor(private collegueService:CollegueService) {

  }

  ngOnInit() {
      this.afficherSucces = false

      this.collegueService.sauvegarder(new Collegue('Benjamin', 'https://goo.gl/oCqLbL', 30),
                                      new Collegue('Julien', 'https://goo.gl/SpBxiM', 20),
                                      new Collegue('Thomas', 'https://goo.gl/JRQnQ1', 80),
                                      new Collegue('Emilie', 'https://goo.gl/my9NTh', 50),
                                      new Collegue('Lucile', 'https://goo.gl/xAc3MN', 90))
                          .then((collegues) => this.collegueService.lister())
                          .then((cols) => this.collegues = cols)
  }

  add(pseudo:HTMLInputElement, imageUrl:HTMLInputElement) {
    this.collegueService.sauvegarder(new Collegue(pseudo.value, imageUrl.value, 30))
    pseudo.value = "";
    imageUrl.value = "";

    this.afficherSucces = true

    return false;
  }
}
