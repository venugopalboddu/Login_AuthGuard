import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { OutComponent } from './out/out.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:"", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path:"dash", component: DashboardComponent, canActivate: [AuthGuard]},
  {path:"out", component: OutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
