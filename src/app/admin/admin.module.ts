import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { StationComponent } from './station/station.component';
import { StationNewComponent } from './station-new/station-new.component';


@NgModule({
  declarations: [HomeComponent, StationComponent, StationNewComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
