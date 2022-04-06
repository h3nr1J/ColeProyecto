import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { ReportesComponent } from './reportes/reportes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    InicioComponent,
    NavbarComponent,
    ReportesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,FormsModule
  ]
})
export class DashboardModule { }
