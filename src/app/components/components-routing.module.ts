import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { IndexComponent } from './index/index.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path : '',
    component : MainComponent,
    children: [
      {
        path : 'dashboard',
        component: IndexComponent
      },
      {
        path : 'configuracion',
        component: ConfiguracionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
