import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationsRoutingModule } from './stations-routing.module';
import { StationsComponent } from './stations/stations.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [StationsComponent],
  imports: [
    CommonModule,
    StationsRoutingModule,
    HttpClientModule
  ]
})
export class StationsModule { }
