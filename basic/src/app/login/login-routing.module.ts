import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'secure',
    component: MainComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
