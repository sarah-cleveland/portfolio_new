import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Project }        from './project';
import { ProjectService } from './project.service';
@Component({
  moduleId: module.id,
  selector: 'project-detail',
  templateUrl: 'project-detail.component.html' ]
})
export class ProjectDetailComponent implements OnInit {
  project: Project;
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.projectService.getProject(params['id']))
      .subscribe(project => this.project = project);
  }
  save(): void {
    this.projectService.update(this.project)
      .then(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
}
