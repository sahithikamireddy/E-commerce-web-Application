import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule, MatTabsModule } from '@angular/material';
import { BatchComponent } from './batch/batch.component'
import {HttpClientTestingBackend} from "@angular/common/http/testing/src/backend";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { StrainComponent } from './strain/strain.component';

@NgModule({
  declarations: [
    AppComponent,
    BatchComponent,
    StrainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
