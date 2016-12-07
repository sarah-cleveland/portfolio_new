import { Component } from '@angular/core';
import { Router }            from '@angular/router';
import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
	moduleId: module.id,
  // selector: 'homepage',
  templateUrl: 'projects.component.html'
})
export class HomepageComponent implements OnInit {
  projects: Project[];
  selectedProject: Project;
  constructor(
    private router: Router,
    private projectService: ProjectService) { }
  getProjects(): void {
    this.projectService.getProjects().then(projects => this.projects = projects);
  }
  ngOnInit(): void {
    this.getProjects();
  }
  onSelect(project: Project): void {
    this.selectedProject = project;
  }
  gotoDetail(project: Project): void {
  	this.selectedProject = project;
    this.router.navigate(['/detail', project.id]);
  }
}