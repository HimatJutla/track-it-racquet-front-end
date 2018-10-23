import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationContainerComponent } from "src/app/authentication/containers/auth-container.component";

const routes: Routes = [
  { path: 'auth', pathMatch: 'full', component: AuthenticationContainerComponent},
  { path: '', pathMatch: 'full', redirectTo: '/auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
