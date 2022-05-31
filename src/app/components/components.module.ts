import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './_shared/navbar/navbar.component';
import { SidebarComponent } from './_shared/sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';


@NgModule({
  declarations: [
    IndexComponent,
    NavbarComponent,
    SidebarComponent,
    MainComponent,
    ConfiguracionComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
