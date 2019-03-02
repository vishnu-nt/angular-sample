import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppLayoutComponent } from './app-layout/app-layout.component';
import { CurriculumModule } from './curriculum/curriculum.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SharedModuleModule } from './shared-module/shared-module.module';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    SharedModuleModule,
    CurriculumModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
