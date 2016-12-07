import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent }      from './homepage.component';
import { ProjectComponent }      from './projects.component';
import { ProjectDetailComponent }  from './project-detail.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
	{ path: '', component: HomepageComponent },
	{ path: 'WEB222', component: HomepageComponent },
	{ path: 'about' component: AboutComponent},
  { path: 'detail/:id', component: ProjectDetailComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
