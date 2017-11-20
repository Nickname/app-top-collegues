import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { CardCollegueComponent } from './card-collegue/card-collegue.component';
import { TableauCollegueComponent } from './tableau-collegue/tableau-collegue.component';
import { DetailCollegueComponent } from './detail-collegue/detail-collegue.component';

import { CollegueService } from './shared/service/collegue.service';

const appRoutes: Routes = [
  {path: 'classique', component: CardCollegueComponent},
  {path: 'tableau', component: TableauCollegueComponent},
  {path: 'detail/:nom', component: DetailCollegueComponent},
  {path: '', pathMatch:'full', redirectTo: 'classique'}
]

@NgModule({
  declarations: [
    AppComponent,
    CardCollegueComponent,
    TableauCollegueComponent,
    DetailCollegueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CollegueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
