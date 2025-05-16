import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AirlineRoutingModule } from './airline-routing.module';
import { AirlineDetailComponent } from './airline-detail/airline-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AirlineRoutingModule,
    AirlineDetailComponent
  ],
  declarations: []
})
export class AirlineModule { }