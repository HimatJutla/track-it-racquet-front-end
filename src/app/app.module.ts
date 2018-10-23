import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from "@angular/core";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationModule } from "src/app/authentication/authentication.module";
import { AuthenticationContainerComponent } from './authentication/containers/auth-container.component';
import { DashboardModule } from "src/app/dashboard/dashboard.module";

// routes
// export const ROUTES: Routes = [
//   { path: '/auth', pathMatch: 'full', component: AuthenticationContainerComponent},
//   { path: '', pathMatch: 'full', redirectTo: '/auth' }
// ];

@NgModule({
  declarations: [
    AppComponent,
    //  RouterModule.forRoot(ROUTES)
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    AppRoutingModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
