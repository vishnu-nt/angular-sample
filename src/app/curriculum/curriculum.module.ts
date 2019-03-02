import { NgModule } from '@angular/core';
import { ComponentConfigurationComponent, DeleteDialog } from './component-configuration/component-configuration.component';
import { CurriculumRoutingModule } from './curriculum-routing.module';
import { CurriculumComponent } from './curriculum.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [ComponentConfigurationComponent, CurriculumComponent, DeleteDialog],
  imports: [
    SharedModuleModule,
    CurriculumRoutingModule,
    
  ],
  exports: [CurriculumComponent]
})
export class CurriculumModule { }
