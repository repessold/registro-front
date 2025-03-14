import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'novo-registro',
      },
      {
        path: 'novo-registro',
        loadChildren: () => import('./modules/registro/registro.module').then((m) => m.RegistroModule)
      },
      {
        path: 'grafico',
        loadChildren: () => import('./modules/registro/registro.module').then((m) => m.RegistroModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
