import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { Routes, RouterModule } from "@angular/router";

import { HeaderComponent } from "src/app/shared/header/header.component";
import { FooterComponent } from "src/app/shared/footer/footer.component";



export const COMPONENTSandPIPES = [
  HeaderComponent,
  FooterComponent
];

@NgModule({
  declarations: COMPONENTSandPIPES,
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
  ],
  exports: [
    COMPONENTSandPIPES
  ],
  providers: [
  ]
})
export class SharedModule { }