import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RoutingModule, routingComponents } from './routing/routing.module';
import { AppComponent } from './app.component';

//Material Components
import { 
  MatToolbarModule, 
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
