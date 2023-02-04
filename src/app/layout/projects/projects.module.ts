import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from 'src/shared/shared.module';
import { ProjectsCardComponent } from './project-cards-shared/projects-card.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsCardComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ]
})
export class ProjectsModule { }
