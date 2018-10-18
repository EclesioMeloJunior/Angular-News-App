import { LoginGuard } from './_guards/login.guard';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'items',
    component: ListComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'add',
        component: AddComponent
      }
    ]
  }
];


export const AppRouting = RouterModule.forRoot(routes);
