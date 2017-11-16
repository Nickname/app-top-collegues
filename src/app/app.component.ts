import { Component } from '@angular/core';
import { Collegue } from './shared/domain/collegue'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string = 'app'
  afficherSucces: boolean
  collegues:Collegue[] = []

  ngOnInit() {
      this.afficherSucces = false

      this.collegues.push(new Collegue('Benjamin', 'https://goo.gl/oCqLbL', 30))
      this.collegues.push(new Collegue('Julien', 'https://goo.gl/SpBxiM', 20))
      this.collegues.push(new Collegue('Thomas', 'https://goo.gl/JRQnQ1', 80))
      this.collegues.push(new Collegue('Emilie', 'https://goo.gl/my9NTh', 50))
      this.collegues.push(new Collegue('Lucile', 'https://goo.gl/xAc3MN', 90))
  }

  add(pseudo:HTMLInputElement, imageUrl:HTMLInputElement) {
    this.collegues.push(new Collegue(pseudo.value, imageUrl.value, 0))
    pseudo.value = "";
    imageUrl.value = "";

    this.afficherSucces = true

    return false;
  }
}
