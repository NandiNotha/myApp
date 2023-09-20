import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GetStartedComponent } from './pages/get-started/get-started.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingComponent,
    HomeComponent,
    GetStartedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
