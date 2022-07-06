import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Modulos
import {AppRoutingModule} from "./app-routing.module";
import {PagesModule} from "./pages/pages.module";
import {AuthModule} from "./auth/auth.module";

// https://valor-software.com/ng2-charts/
import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import {NopagefoundComponent} from "./pages/nopagefound/nopagefound.component";


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    NgChartsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
