import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

import { AuthenticationContainerComponent } from './containers/auth-container.component';
// import { AuthenticationService } from "src/app/authentication/authentication.service";
import { Routes, RouterModule } from "@angular/router";



// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import { reducers, effects } from './store';


export const COMPONENTSandPIPES = [
  AuthenticationContainerComponent
];

// export const ROUTES: Routes = [
//   {
//     path: 'auth',
//     component: AuthenticationContainerComponent
//     children: [
//       { path: '', pathMatch: 'full', redirectTo: 'login' },
//       { path: 'login', loadChildren: './login/login.module#LoginModule' },
//       { path: 'register', loadChildren: './register/register.module#RegisterModule' },
//     ]
//   }
// ];

@NgModule({
  declarations: COMPONENTSandPIPES,
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    //  RouterModule.forChild(ROUTES)
    // StoreModule.forFeature('asteroids', reducers),
    // EffectsModule.forFeature(effects),
  ],
  exports: [
    AuthenticationContainerComponent
  ],
  providers: [
    // AuthenticationService
  ]
})
export class AuthenticationModule { }