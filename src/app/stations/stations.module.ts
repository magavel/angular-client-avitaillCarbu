import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationsRoutingModule } from './stations-routing.module';
import { StationsComponent } from './stations/stations.component';


@NgModule({
  declarations: [StationsComponent],
  imports: [
    CommonModule,
    StationsRoutingModule
  ]
})
export class StationsModule { }
