import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerRoutingModule } from './career-routing.module';
import { CareerComponent } from './career.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    CareerComponent
  ],
  imports: [
    CommonModule,
    CareerRoutingModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class CareerModule { }
