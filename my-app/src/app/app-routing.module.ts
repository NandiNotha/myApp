import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = 
[
  { path: 'home', component: HomeComponent },
  { path:'landing', component: LandingComponent },
  { path: 'nav', component: NavComponent },
  { path: 'getStarted', component: GetStartedComponent  },
  { path: '', component: LandingComponent, pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
