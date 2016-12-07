import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }        from './app.component';
import { HomepageComponent }     from './homepage.component';
import { AboutComponent }     from './about.component';
import { ProjectDetailComponent } from './project-detail.component';
import { ProjectsComponent }     from './projects.component';
import { ProjectService }         from './project.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    HomepageComponent,
    ProjectDetailComponent,
    ProjectsComponent
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}