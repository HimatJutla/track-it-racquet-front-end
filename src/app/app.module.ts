import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModuleWithProviders } from "@angular/core";
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationModule } from "src/app/authentication/authentication.module";
import { DashboardModule } from "src/app/dashboard/dashboard.module";

import { AppComponent } from './app.component';
import { AuthenticationContainerComponent } from './authentication/containers/auth-container.component';
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
  declarations: [
    AppComponent
    //  RouterModule.forRoot(ROUTES)
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    AppRoutingModule,
    DashboardModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
