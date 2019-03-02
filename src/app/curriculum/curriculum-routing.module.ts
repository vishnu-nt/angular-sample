import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ComponentConfigurationComponent } from "./component-configuration/component-configuration.component";
import { CurriculumComponent } from "./curriculum.component";
import { ErrorPageComponent } from '../error-page/error-page.component';

const curriculumRoutes: Routes = [
  {
    path: "curriculum",
    component: CurriculumComponent,
    children: [
      {
        path: "component-configuration",
        component: ComponentConfigurationComponent
      }
    ]
  },
  {
    path: '**', component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(curriculumRoutes)],
  exports: [RouterModule]
})
export class CurriculumRoutingModule {}
