import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: '',   redirectTo: '/curriculum', pathMatch: 'full' },
  {
    path: "curriculum",
    loadChildren: "./curriculum/curriculum-routing.module#CurriculumRoutingModule"
  },
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
