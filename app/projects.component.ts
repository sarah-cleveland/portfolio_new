import { Component } from '@angular/core';
import { Router }            from '@angular/router';
import { Project } from './project';
import { ProjectService } from './project.service';
@Component({
  moduleId: module.id,
  selector: 'projects',
  templateUrl: 'projects.component.html',
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  selectedProject: Project;
  constructor(
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
    this.router.navigate(['/detail', this.selectedProject.id]);
  }
}
