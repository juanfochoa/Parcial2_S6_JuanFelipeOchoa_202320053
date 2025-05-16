import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AirlineDetailComponent } from './airline-detail/airline-detail.component';
import { AirlineRoutingModule } from './airline-routing.module';

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
